"use client"

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Share, Printer, Globe } from 'lucide-react';
import { toast } from 'sonner';

interface TimeZoneResult {
  time: string;
  date: string;
  timezone: string;
  offset: string;
}

const timezones = [
  { value: 'UTC', label: 'UTC (Coordinated Universal Time)', offset: 0 },
  { value: 'EST', label: 'EST (Eastern Standard Time)', offset: -5 },
  { value: 'CST', label: 'CST (Central Standard Time)', offset: -6 },
  { value: 'MST', label: 'MST (Mountain Standard Time)', offset: -7 },
  { value: 'PST', label: 'PST (Pacific Standard Time)', offset: -8 },
  { value: 'GMT', label: 'GMT (Greenwich Mean Time)', offset: 0 },
  { value: 'CET', label: 'CET (Central European Time)', offset: 1 },
  { value: 'JST', label: 'JST (Japan Standard Time)', offset: 9 },
  { value: 'AEST', label: 'AEST (Australian Eastern Standard Time)', offset: 10 },
  { value: 'IST', label: 'IST (India Standard Time)', offset: 5.5 },
  { value: 'CST_CHINA', label: 'CST (China Standard Time)', offset: 8 },
  { value: 'MSK', label: 'MSK (Moscow Standard Time)', offset: 3 },
  { value: 'AST', label: 'AST (Atlantic Standard Time)', offset: -4 },
  { value: 'HST', label: 'HST (Hawaii Standard Time)', offset: -10 },
  { value: 'AKST', label: 'AKST (Alaska Standard Time)', offset: -9 },
  { value: 'CAT', label: 'CAT (Central Africa Time)', offset: 2 },
  { value: 'EAT', label: 'EAT (East Africa Time)', offset: 3 },
  { value: 'WAT', label: 'WAT (West Africa Time)', offset: 1 },
  { value: 'BRT', label: 'BRT (Brasilia Time)', offset: -3 },
  { value: 'ART', label: 'ART (Argentina Time)', offset: -3 },
];

export default function TimezoneConverter() {
  const [inputTime, setInputTime] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [fromTimezone, setFromTimezone] = useState('UTC');
  const [toTimezone, setToTimezone] = useState('EST');
  const [result, setResult] = useState<TimeZoneResult | null>(null);
  const [loading, setLoading] = useState(false);

  const convertTimezone = () => {
    if (!inputTime || !inputDate) {
      toast.error('Please enter both date and time');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const fromTz = timezones.find(tz => tz.value === fromTimezone);
      const toTz = timezones.find(tz => tz.value === toTimezone);

      if (!fromTz || !toTz) return;

      // Create date object from input
      const inputDateTime = new Date(`${inputDate}T${inputTime}`);
      
      // Convert to UTC first
      const utcTime = new Date(inputDateTime.getTime() - (fromTz.offset * 60 * 60 * 1000));
      
      // Then convert to target timezone
      const targetTime = new Date(utcTime.getTime() + (toTz.offset * 60 * 60 * 1000));

      const timeString = targetTime.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
      
      const dateString = targetTime.toLocaleDateString([], {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const offsetString = toTz.offset >= 0 ? `+${toTz.offset}` : `${toTz.offset}`;

      setResult({
        time: timeString,
        date: dateString,
        timezone: toTz.label,
        offset: `UTC${offsetString}`,
      });
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (inputTime && inputDate) {
      convertTimezone();
    }
  }, [inputTime, inputDate, fromTimezone, toTimezone]);

  useEffect(() => {
    // Set current date and time as default
    const now = new Date();
    setInputDate(now.toISOString().split('T')[0]);
    setInputTime(now.toTimeString().slice(0, 5));
  }, []);

  const shareResults = async () => {
    if (!result) return;

    const shareData = {
      title: 'Timezone Conversion Results - MetricBuddy',
      text: `${inputTime} ${fromTimezone} = ${result.time} ${toTimezone} on ${result.date}`,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
        toast.success('Conversion copied to clipboard!');
      }
    } catch (error) {
      try {
        await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
        toast.success('Conversion copied to clipboard!');
      } catch (clipboardError) {
        toast.error('Unable to share or copy conversion');
      }
    }
  };

  const printResults = () => {
    window.print();
  };

  const getCurrentTimeInTimezone = (timezone: string) => {
    const tz = timezones.find(t => t.value === timezone);
    if (!tz) return '';
    
    const now = new Date();
    const utc = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
    const targetTime = new Date(utc.getTime() + (tz.offset * 60 * 60 * 1000));
    
    return targetTime.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Timezone Converter</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Convert time between different timezones worldwide. Perfect for scheduling meetings and travel planning.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Convert Time</CardTitle>
                <CardDescription>
                  Enter date and time to convert between timezones
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={inputDate}
                      onChange={(e) => setInputDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={inputTime}
                      onChange={(e) => setInputTime(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>From Timezone</Label>
                    <Select value={fromTimezone} onValueChange={setFromTimezone}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timezones.map((tz) => (
                          <SelectItem key={tz.value} value={tz.value}>
                            {tz.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="text-xs text-muted-foreground">
                      Current time: {getCurrentTimeInTimezone(fromTimezone)}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>To Timezone</Label>
                    <Select value={toTimezone} onValueChange={setToTimezone}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timezones.map((tz) => (
                          <SelectItem key={tz.value} value={tz.value}>
                            {tz.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="text-xs text-muted-foreground">
                      Current time: {getCurrentTimeInTimezone(toTimezone)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {result && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Conversion Result</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={shareResults}>
                        <Share className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" onClick={printResults}>
                        <Printer className="h-4 w-4 mr-2" />
                        Print
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="p-6 rounded-lg border bg-muted/50">
                      <div className="text-sm text-muted-foreground mb-2">
                        {inputTime} on {inputDate} ({fromTimezone})
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {result.time}
                      </div>
                      <div className="text-lg font-medium">
                        {result.date}
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        {result.timezone} ({result.offset})
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Time Difference</h4>
                    <div className="p-3 rounded border bg-muted/30">
                      <div className="text-sm">
                        {(() => {
                          const fromTz = timezones.find(tz => tz.value === fromTimezone);
                          const toTz = timezones.find(tz => tz.value === toTimezone);
                          if (!fromTz || !toTz) return '';
                          
                          const diff = toTz.offset - fromTz.offset;
                          const absDiff = Math.abs(diff);
                          const hours = Math.floor(absDiff);
                          const minutes = (absDiff % 1) * 60;
                          
                          let diffText = `${hours}h`;
                          if (minutes > 0) diffText += ` ${minutes}m`;
                          
                          if (diff > 0) {
                            return `${toTimezone} is ${diffText} ahead of ${fromTimezone}`;
                          } else if (diff < 0) {
                            return `${toTimezone} is ${diffText} behind ${fromTimezone}`;
                          } else {
                            return `${toTimezone} and ${fromTimezone} are in the same timezone`;
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>World Clock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {['UTC', 'EST', 'PST', 'GMT', 'JST', 'AEST', 'IST', 'CET'].map((tz) => (
                  <div key={tz} className="p-3 rounded border text-center">
                    <div className="font-semibold text-sm">{tz}</div>
                    <div className="text-lg font-mono">
                      {getCurrentTimeInTimezone(tz)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}