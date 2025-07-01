"use client"

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChefHat, Share, Printer, ArrowRightLeft } from 'lucide-react';
import { toast } from 'sonner';

interface ConversionResult {
  value: number;
  unit: string;
  ingredient: string;
}

const ingredients = {
  'flour': { density: 125, name: 'All-Purpose Flour' },
  'sugar': { density: 200, name: 'Granulated Sugar' },
  'brown-sugar': { density: 220, name: 'Brown Sugar (packed)' },
  'butter': { density: 227, name: 'Butter' },
  'milk': { density: 245, name: 'Milk' },
  'water': { density: 240, name: 'Water' },
  'oil': { density: 220, name: 'Vegetable Oil' },
  'honey': { density: 340, name: 'Honey' },
  'cocoa': { density: 85, name: 'Cocoa Powder' },
  'rice': { density: 185, name: 'Rice (uncooked)' },
  'oats': { density: 80, name: 'Rolled Oats' },
  'nuts': { density: 150, name: 'Chopped Nuts' },
};

const units = {
  'cups': { toMl: 240, name: 'Cups' },
  'tbsp': { toMl: 15, name: 'Tablespoons' },
  'tsp': { toMl: 5, name: 'Teaspoons' },
  'ml': { toMl: 1, name: 'Milliliters' },
  'fl-oz': { toMl: 30, name: 'Fluid Ounces' },
  'grams': { toMl: 1, name: 'Grams' },
  'oz': { toMl: 28.35, name: 'Ounces' },
  'lbs': { toMl: 453.6, name: 'Pounds' },
};

export default function CookingConverter() {
  const [amount, setAmount] = useState('');
  const [fromUnit, setFromUnit] = useState('cups');
  const [toUnit, setToUnit] = useState('grams');
  const [ingredient, setIngredient] = useState('flour');
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const convertMeasurement = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const inputAmount = parseFloat(amount);
      const selectedIngredient = ingredients[ingredient as keyof typeof ingredients];
      const fromUnitData = units[fromUnit as keyof typeof units];
      const toUnitData = units[toUnit as keyof typeof units];

      let convertedValue: number;

      // Convert volume to weight or vice versa
      if ((fromUnit === 'grams' || fromUnit === 'oz' || fromUnit === 'lbs') && 
          (toUnit === 'cups' || toUnit === 'tbsp' || toUnit === 'tsp' || toUnit === 'ml' || toUnit === 'fl-oz')) {
        // Weight to volume
        let gramsAmount = inputAmount;
        if (fromUnit === 'oz') gramsAmount = inputAmount * 28.35;
        if (fromUnit === 'lbs') gramsAmount = inputAmount * 453.6;
        
        const volumeInMl = gramsAmount / selectedIngredient.density * 240; // 240ml = 1 cup for density calculation
        convertedValue = volumeInMl / toUnitData.toMl;
      } else if ((fromUnit === 'cups' || fromUnit === 'tbsp' || fromUnit === 'tsp' || fromUnit === 'ml' || fromUnit === 'fl-oz') && 
                 (toUnit === 'grams' || toUnit === 'oz' || toUnit === 'lbs')) {
        // Volume to weight
        const volumeInMl = inputAmount * fromUnitData.toMl;
        const gramsAmount = (volumeInMl / 240) * selectedIngredient.density; // 240ml = 1 cup for density calculation
        
        if (toUnit === 'grams') convertedValue = gramsAmount;
        else if (toUnit === 'oz') convertedValue = gramsAmount / 28.35;
        else convertedValue = gramsAmount / 453.6; // lbs
      } else {
        // Same type conversion (volume to volume or weight to weight)
        if (fromUnit === toUnit) {
          convertedValue = inputAmount;
        } else {
          const baseValue = inputAmount * fromUnitData.toMl;
          convertedValue = baseValue / toUnitData.toMl;
        }
      }

      setResult({
        value: Math.round(convertedValue * 100) / 100,
        unit: units[toUnit as keyof typeof units].name,
        ingredient: selectedIngredient.name,
      });
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (amount && parseFloat(amount) > 0) {
      convertMeasurement();
    }
  }, [amount, fromUnit, toUnit, ingredient]);

  const shareResults = async () => {
    if (!result) return;

    const shareData = {
      title: 'Cooking Conversion Results - MetricBuddy',
      text: `${amount} ${units[fromUnit as keyof typeof units].name} of ${result.ingredient} = ${result.value} ${result.unit}`,
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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Cooking Converter</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Convert between cups, grams, tablespoons, and other cooking measurements with precision.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Convert Measurements</CardTitle>
                <CardDescription>
                  Enter amount and select units to convert cooking measurements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="ingredient">Ingredient</Label>
                  <Select value={ingredient} onValueChange={setIngredient}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ingredient" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(ingredients).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    step="0.01"
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
                        {Object.entries(units).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value.name}
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
                          {Object.entries(units).map(([key, value]) => (
                            <SelectItem key={key} value={key}>
                              {value.name}
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
                        {amount} {units[fromUnit as keyof typeof units].name} of {result.ingredient}
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {result.value} {result.unit}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Quick Reference</h4>
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between">
                        <span>1 cup {result.ingredient}:</span>
                        <span>{ingredients[ingredient as keyof typeof ingredients].density}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1 tablespoon:</span>
                        <span>15ml</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1 teaspoon:</span>
                        <span>5ml</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cooking Measurement Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3">Common Conversions</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>1 cup:</span>
                      <span>240ml / 16 tbsp</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 tablespoon:</span>
                      <span>15ml / 3 tsp</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 fluid ounce:</span>
                      <span>30ml / 2 tbsp</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 pound:</span>
                      <span>454g / 16 oz</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tips for Accurate Measuring</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Use dry measuring cups for dry ingredients</li>
                    <li>• Level off dry ingredients with a knife</li>
                    <li>• Use liquid measuring cups for liquids</li>
                    <li>• Pack brown sugar unless specified otherwise</li>
                    <li>• Sift flour before measuring for best results</li>
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