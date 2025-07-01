"use client"

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Weight, Share, Printer, ArrowRightLeft } from 'lucide-react';
import { toast } from 'sonner';

interface ConversionResult {
  value: number;
  unit: string;
  unitName: string;
}

const weightUnits = {
  'kg': { factor: 1, name: 'Kilograms', symbol: 'kg' },
  'g': { factor: 0.001, name: 'Grams', symbol: 'g' },
  'mg': { factor: 0.000001, name: 'Milligrams', symbol: 'mg' },
  'lb': { factor: 0.453592, name: 'Pounds', symbol: 'lb' },
  'oz': { factor: 0.0283495, name: 'Ounces', symbol: 'oz' },
  'stone': { factor: 6.35029, name: 'Stones', symbol: 'st' },
  'ton': { factor: 1000, name: 'Metric Tons', symbol: 't' },
  'ton-us': { factor: 907.185, name: 'US Tons', symbol: 'ton' },
  'ton-uk': { factor: 1016.05, name: 'UK Tons', symbol: 'ton' },
  'carat': { factor: 0.0002, name: 'Carats', symbol: 'ct' },
  'grain': { factor: 0.0000647989, name: 'Grains', symbol: 'gr' },
  'dram': { factor: 0.00177185, name: 'Drams', symbol: 'dr' },
};

export default function WeightConverter() {
  const [amount, setAmount] = useState('');
  const [fromUnit, setFromUnit] = useState('kg');
  const [toUnit, setToUnit] = useState('lb');
  const [results, setResults] = useState<ConversionResult[]>([]);
  const [loading, setLoading] = useState(false);

  const convertWeight = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid weight');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const inputAmount = parseFloat(amount);
      const fromUnitData = weightUnits[fromUnit as keyof typeof weightUnits];
      const toUnitData = weightUnits[toUnit as keyof typeof weightUnits];

      // Convert to kilograms first (base unit)
      const kilograms = inputAmount * fromUnitData.factor;
      
      // Convert from kilograms to target unit
      const convertedValue = kilograms / toUnitData.factor;

      // Also calculate common conversions
      const commonResults: ConversionResult[] = [];
      
      // Always show the requested conversion first
      commonResults.push({
        value: Math.round(convertedValue * 1000000) / 1000000,
        unit: toUnitData.symbol,
        unitName: toUnitData.name,
      });

      // Add other common conversions if different from the main conversion
      const commonUnits = ['kg', 'g', 'lb', 'oz'];
      commonUnits.forEach(unit => {
        if (unit !== toUnit && unit !== fromUnit) {
          const unitData = weightUnits[unit as keyof typeof weightUnits];
          const value = kilograms / unitData.factor;
          commonResults.push({
            value: Math.round(value * 1000000) / 1000000,
            unit: unitData.symbol,
            unitName: unitData.name,
          });
        }
      });

      setResults(commonResults);
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (amount && parseFloat(amount) > 0) {
      convertWeight();
    }
  }, [amount, fromUnit, toUnit]);

  const shareResults = async () => {
    if (results.length === 0) return;

    const mainResult = results[0];
    const shareData = {
      title: 'Weight Conversion Results - MetricBuddy',
      text: `${amount} ${weightUnits[fromUnit as keyof typeof weightUnits].name} = ${mainResult.value} ${mainResult.unitName}`,
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

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + 'K';
    } else if (num < 0.001 && num > 0) {
      return num.toExponential(3);
    } else {
      return num.toFixed(6).replace(/\.?0+$/, '');
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Weight className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Weight Converter</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Convert between different weight units instantly. Perfect for cooking, shipping, and international measurements.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Convert Weight</CardTitle>
                <CardDescription>
                  Enter weight amount and select units to convert
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Weight Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    step="0.000001"
                    min="0"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>From</Label>
                    <Select value={fromUnit} onValueChange={setFromUnit}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(weightUnits).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value.name} ({value.symbol})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>To</Label>
                    <div className="flex space-x-2">
                      <Select value={toUnit} onValueChange={setToUnit}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(weightUnits).map(([key, value]) => (
                            <SelectItem key={key} value={key}>
                              {value.name} ({value.symbol})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="icon" onClick={swapUnits}>
                        <ArrowRightLeft className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {results.length > 0 && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Conversion Results</CardTitle>
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
                  <div className="p-6 rounded-lg border bg-primary/5">
                    <div className="text-sm text-muted-foreground mb-2">
                      {amount} {weightUnits[fromUnit as keyof typeof weightUnits].name}
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {formatNumber(results[0].value)} {results[0].unit}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {results[0].unitName}
                    </div>
                  </div>

                  {results.length > 1 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold">Other Common Conversions</h4>
                      <div className="grid gap-2">
                        {results.slice(1).map((result, index) => (
                          <div key={index} className="flex justify-between items-center p-3 rounded border bg-muted/30">
                            <span className="text-sm font-medium">{result.unitName}</span>
                            <span className="font-mono">{formatNumber(result.value)} {result.unit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Weight Conversion Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-3">Metric System</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>1 kilogram (kg):</span>
                      <span>1,000 grams</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 gram (g):</span>
                      <span>1,000 milligrams</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 metric ton:</span>
                      <span>1,000 kilograms</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Imperial System</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>1 pound (lb):</span>
                      <span>16 ounces</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 stone:</span>
                      <span>14 pounds</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 US ton:</span>
                      <span>2,000 pounds</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Common Conversions</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>1 kg:</span>
                      <span>≈ 2.205 lbs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 lb:</span>
                      <span>≈ 453.6 g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 oz:</span>
                      <span>≈ 28.35 g</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}