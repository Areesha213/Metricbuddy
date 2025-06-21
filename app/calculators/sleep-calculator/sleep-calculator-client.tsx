"use client"

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Moon, Sun, Clock, Share, Printer } from 'lucide-react';
import { toast } from 'sonner';

interface SleepTime {
  time: string;
  cycles: number;
}

export default function SleepCalculatorClient() {
  const [bedtime, setBedtime] = useState('');
  const [waketime, setWaketime] = useState('');
  const [sleepTimes, setSleepTimes] = useState<SleepTime[]>([]);
  const [wakeTimes, setWakeTimes] = useState<SleepTime[]>([]);
  const [loading, setLoading] = useState(false);

  const calculateSleepTimes = () => {
    if (!bedtime) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const [hours, minutes] = bedtime.split(':').map(Number);
      const bedtimeDate = new Date();
      bedtimeDate.setHours(hours, minutes, 0, 0);
      
      const sleepCycles = [1, 2, 3, 4, 5, 6];
      const cycleLength = 90; // minutes per sleep cycle
      const fallAsleepTime = 15; // average time to fall asleep
      
      const times = sleepCycles.map(cycles => {
        const totalMinutes = (cycles * cycleLength) + fallAsleepTime;
        const wakeTime = new Date(bedtimeDate.getTime() + totalMinutes * 60000);
        
        return {
          time: wakeTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          cycles: cycles
        };
      });
      
      setSleepTimes(times);
      setLoading(false);
    }, 500);
  };

  const calculateBedtimes = () => {
    if (!waketime) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const [hours, minutes] = waketime.split(':').map(Number);
      const waketimeDate = new Date();
      waketimeDate.setHours(hours, minutes, 0, 0);
      
      const sleepCycles = [6, 5, 4, 3];
      const cycleLength = 90;
      const fallAsleepTime = 15;
      
      const times = sleepCycles.map(cycles => {
        const totalMinutes = (cycles * cycleLength) + fallAsleepTime;
        const bedTime = new Date(waketimeDate.getTime() - totalMinutes * 60000);
        
        return {
          time: bedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          cycles: cycles
        };
      });
      
      setWakeTimes(times);
      setLoading(false);
    }, 500);
  };

  const shareResults = async () => {
    const shareData = {
      title: 'My Sleep Calculator Results - MetricBuddy',
      text: 'Check out my optimal sleep times calculated with MetricBuddy!',
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      }
    } catch (error) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      } catch (clipboardError) {
        toast.error('Unable to share or copy link');
      }
    }
  };

  const printResults = () => {
    window.print();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Moon className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Sleep Calculator</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate optimal sleep and wake times based on 90-minute sleep cycles to wake up refreshed.
            </p>
          </div>

          <Tabs defaultValue="bedtime" className="space-y-6">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
              <TabsTrigger value="bedtime" className="flex items-center space-x-2">
                <Moon className="h-4 w-4" />
                <span>Bedtime</span>
              </TabsTrigger>
              <TabsTrigger value="waketime" className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <span>Wake Time</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bedtime" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Moon className="h-5 w-5" />
                    <span>When should I wake up?</span>
                  </CardTitle>
                  <CardDescription>
                    Enter your planned bedtime to see optimal wake-up times
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedtime">Bedtime</Label>
                    <Input
                      id="bedtime"
                      type="time"
                      value={bedtime}
                      onChange={(e) => setBedtime(e.target.value)}
                      className="max-w-xs"
                    />
                  </div>
                  <Button 
                    onClick={calculateSleepTimes} 
                    disabled={!bedtime || loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? 'Calculating...' : 'Calculate Wake Times'}
                  </Button>
                </CardContent>
              </Card>

              {sleepTimes.length > 0 && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Optimal Wake Times</CardTitle>
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
                    <CardDescription>
                      Wake up at these times to feel most refreshed
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {sleepTimes.map((sleepTime, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 rounded-lg border bg-muted/50"
                        >
                          <div>
                            <div className="font-semibold text-lg">{sleepTime.time}</div>
                            <div className="text-sm text-muted-foreground">
                              {sleepTime.cycles} sleep cycle{sleepTime.cycles !== 1 ? 's' : ''}
                            </div>
                          </div>
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="waketime" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sun className="h-5 w-5" />
                    <span>When should I go to bed?</span>
                  </CardTitle>
                  <CardDescription>
                    Enter your desired wake time to see optimal bedtimes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="waketime">Wake Time</Label>
                    <Input
                      id="waketime"
                      type="time"
                      value={waketime}
                      onChange={(e) => setWaketime(e.target.value)}
                      className="max-w-xs"
                    />
                  </div>
                  <Button 
                    onClick={calculateBedtimes} 
                    disabled={!waketime || loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? 'Calculating...' : 'Calculate Bedtimes'}
                  </Button>
                </CardContent>
              </Card>

              {wakeTimes.length > 0 && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Optimal Bedtimes</CardTitle>
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
                    <CardDescription>
                      Go to bed at these times for optimal sleep
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {wakeTimes.map((wakeTime, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 rounded-lg border bg-muted/50"
                        >
                          <div>
                            <div className="font-semibold text-lg">{wakeTime.time}</div>
                            <div className="text-sm text-muted-foreground">
                              {wakeTime.cycles} sleep cycle{wakeTime.cycles !== 1 ? 's' : ''}
                            </div>
                          </div>
                          <Moon className="h-5 w-5 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Sleep occurs in cycles of approximately 90 minutes. Each cycle consists of light sleep, 
                deep sleep, and REM sleep. Waking up at the end of a complete cycle helps you feel more 
                refreshed and alert.
              </p>
              <ul>
                <li>Most adults need 6-9 hours of sleep (4-6 complete cycles)</li>
                <li>It typically takes 15 minutes to fall asleep</li>
                <li>Waking during deep sleep causes grogginess</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}