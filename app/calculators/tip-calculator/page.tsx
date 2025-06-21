"use client"

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Calculator, Share, Printer, Users, DollarSign } from 'lucide-react';
import { toast } from 'sonner';

interface TipResult {
  tipAmount: number;
  totalAmount: number;
  perPersonTotal: number;
  perPersonTip: number;
}

export default function TipCalculatorPage() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState([18]);
  const [numberOfPeople, setNumberOfPeople] = useState('1');
  const [result, setResult] = useState<TipResult | null>(null);

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = tipPercentage[0] || 0;
    const people = parseInt(numberOfPeople) || 1;

    if (bill <= 0) {
      toast.error('Please enter a valid bill amount');
      return;
    }

    const tipAmount = (bill * tip) / 100;
    const totalAmount = bill + tipAmount;
    const perPersonTotal = totalAmount / people;
    const perPersonTip = tipAmount / people;

    setResult({
      tipAmount,
      totalAmount,
      perPersonTotal,
      perPersonTip,
    });
  };

  useEffect(() => {
    if (billAmount && parseFloat(billAmount) > 0) {
      calculateTip();
    }
  }, [billAmount, tipPercentage, numberOfPeople]);

  const shareResults = () => {
    if (navigator.share && result) {
      navigator.share({
        title: 'Tip Calculator Results',
        text: `Bill: $${billAmount}, Tip: ${tipPercentage[0]}%, Total: $${result.totalAmount.toFixed(2)}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const printResults = () => {
    window.print();
  };

  const quickTipButtons = [10, 15, 18, 20, 25];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Calculator className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Tip Calculator</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate tips and split bills easily. Perfect for restaurants, cafes, and group dining.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Calculate Your Tip</CardTitle>
                <CardDescription>
                  Enter bill details to calculate tip and split costs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bill">Bill Amount ($)</Label>
                  <Input
                    id="bill"
                    type="number"
                    placeholder="0.00"
                    value={billAmount}
                    onChange={(e) => setBillAmount(e.target.value)}
                    step="0.01"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Tip Percentage</Label>
                    <span className="font-semibold text-lg">{tipPercentage[0]}%</span>
                  </div>
                  <Slider
                    value={tipPercentage}
                    onValueChange={setTipPercentage}
                    max={30}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex gap-2 flex-wrap">
                    {quickTipButtons.map((tip) => (
                      <Button
                        key={tip}
                        variant={tipPercentage[0] === tip ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTipPercentage([tip])}
                      >
                        {tip}%
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="people">Number of People</Label>
                  <Input
                    id="people"
                    type="number"
                    placeholder="1"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                    min="1"
                  />
                </div>
              </CardContent>
            </Card>

            {result && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Calculation Results</CardTitle>
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 rounded-lg border bg-muted/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Tip Amount</span>
                      </div>
                      <div className="text-2xl font-bold">
                        ${result.tipAmount.toFixed(2)}
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border bg-muted/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calculator className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Total Amount</span>
                      </div>
                      <div className="text-2xl font-bold">
                        ${result.totalAmount.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  {parseInt(numberOfPeople) > 1 && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span className="font-semibold">Split Between {numberOfPeople} People</span>
                      </div>
                      
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="p-3 rounded border">
                          <div className="text-sm text-muted-foreground">Per Person Total</div>
                          <div className="text-xl font-bold">
                            ${result.perPersonTotal.toFixed(2)}
                          </div>
                        </div>
                        <div className="p-3 rounded border">
                          <div className="text-sm text-muted-foreground">Per Person Tip</div>
                          <div className="text-xl font-bold">
                            ${result.perPersonTip.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-4 rounded-lg border bg-primary/5">
                    <h4 className="font-semibold mb-2">Bill Breakdown</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${parseFloat(billAmount || '0').toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tip ({tipPercentage[0]}%):</span>
                        <span>${result.tipAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-semibold border-t pt-1">
                        <span>Total:</span>
                        <span>${result.totalAmount.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tipping Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3">Standard Tipping Rates</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Restaurant (Good Service):</span>
                      <span className="font-medium">18-20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Restaurant (Excellent Service):</span>
                      <span className="font-medium">20-25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fast Casual/Counter Service:</span>
                      <span className="font-medium">10-15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span className="font-medium">15-20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bar/Drinks:</span>
                      <span className="font-medium">$1-2 per drink</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tips for Tipping</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Tip based on pre-tax amount</li>
                    <li>• Consider service quality</li>
                    <li>• Tip in cash when possible</li>
                    <li>• Round up for convenience</li>
                    <li>• Be generous for exceptional service</li>
                  </ul>
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