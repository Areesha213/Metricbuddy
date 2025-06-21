"use client"

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Scale, Share, Printer, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface BMIResult {
  bmi: number;
  category: string;
  description: string;
  color: string;
  recommendations: string[];
}

export default function BMICalculatorClient() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState<BMIResult | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateBMI = () => {
    if (!height || !weight) {
      toast.error('Please enter both height and weight');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      let heightInMeters: number;
      let weightInKg: number;

      if (unit === 'metric') {
        heightInMeters = parseFloat(height) / 100; // cm to m
        weightInKg = parseFloat(weight);
      } else {
        heightInMeters = parseFloat(height) * 0.0254; // inches to m
        weightInKg = parseFloat(weight) * 0.453592; // lbs to kg
      }

      const bmi = weightInKg / (heightInMeters * heightInMeters);
      
      let category: string;
      let description: string;
      let color: string;
      let recommendations: string[];

      if (bmi < 18.5) {
        category = 'Underweight';
        description = 'Below normal weight';
        color = 'text-blue-600';
        recommendations = [
          'Consult with a healthcare provider',
          'Consider a balanced diet with adequate calories',
          'Include strength training exercises',
        ];
      } else if (bmi < 25) {
        category = 'Normal weight';
        description = 'Healthy weight range';
        color = 'text-green-600';
        recommendations = [
          'Maintain current healthy lifestyle',
          'Continue regular physical activity',
          'Keep a balanced diet',
        ];
      } else if (bmi < 30) {
        category = 'Overweight';
        description = 'Above normal weight';
        color = 'text-yellow-600';
        recommendations = [
          'Consider a calorie-controlled diet',
          'Increase physical activity',
          'Consult with a healthcare provider',
        ];
      } else {
        category = 'Obese';
        description = 'Significantly above normal weight';
        color = 'text-red-600';
        recommendations = [
          'Seek medical advice for weight management',
          'Consider professional nutrition counseling',
          'Implement gradual lifestyle changes',
        ];
      }

      setResult({
        bmi: Math.round(bmi * 10) / 10,
        category,
        description,
        color,
        recommendations,
      });
      setLoading(false);
    }, 500);
  };

  const shareResults = async () => {
    if (!result) return;

    const shareData = {
      title: 'My BMI Calculator Results',
      text: `My BMI is ${result.bmi} (${result.category}) - calculated with MetricBuddy!`,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
        toast.success('Results copied to clipboard!');
      }
    } catch (error) {
      try {
        await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
        toast.success('Results copied to clipboard!');
      } catch (clipboardError) {
        toast.error('Unable to share or copy results');
      }
    }
  };

  const printResults = () => {
    window.print();
  };

  const getBMIProgress = (bmi: number) => {
    if (bmi < 18.5) return (bmi / 18.5) * 25;
    if (bmi < 25) return 25 + ((bmi - 18.5) / (25 - 18.5)) * 25;
    if (bmi < 30) return 50 + ((bmi - 25) / (30 - 25)) * 25;
    return Math.min(75 + ((bmi - 30) / 10) * 25, 100);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">BMI Calculator</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate your Body Mass Index (BMI) to assess if you're in a healthy weight range.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Calculate Your BMI</CardTitle>
                <CardDescription>
                  Enter your height and weight to calculate your BMI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Units</Label>
                  <RadioGroup
                    value={unit}
                    onValueChange={setUnit}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="metric" id="metric" />
                      <Label htmlFor="metric">Metric (cm, kg)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="imperial" id="imperial" />
                      <Label htmlFor="imperial">Imperial (in, lbs)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="height">
                      Height {unit === 'metric' ? '(cm)' : '(inches)'}
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder={unit === 'metric' ? '170' : '67'}
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">
                      Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder={unit === 'metric' ? '70' : '154'}
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculateBMI} 
                  disabled={!height || !weight || loading}
                  className="w-full"
                >
                  {loading ? 'Calculating...' : 'Calculate BMI'}
                </Button>
              </CardContent>
            </Card>

            {result && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Your BMI Result</CardTitle>
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
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold">{result.bmi}</div>
                    <div className={`text-xl font-semibold ${result.color}`}>
                      {result.category}
                    </div>
                    <div className="text-muted-foreground">
                      {result.description}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>BMI Scale</span>
                      <span>{result.bmi}</span>
                    </div>
                    <Progress value={getBMIProgress(result.bmi)} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Underweight</span>
                      <span>Normal</span>
                      <span>Overweight</span>
                      <span>Obese</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Recommendations
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Understanding BMI</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">BMI Categories</h4>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Underweight:</strong> BMI less than 18.5</li>
                    <li><strong>Normal weight:</strong> BMI 18.5-24.9</li>
                    <li><strong>Overweight:</strong> BMI 25-29.9</li>
                    <li><strong>Obese:</strong> BMI 30 or greater</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Important Notes</h4>
                  <ul className="space-y-1 text-sm">
                    <li>BMI is a screening tool, not a diagnostic method</li>
                    <li>It doesn't account for muscle mass or bone density</li>
                    <li>Consult healthcare providers for personalized advice</li>
                    <li>Athletes may have higher BMI due to muscle mass</li>
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