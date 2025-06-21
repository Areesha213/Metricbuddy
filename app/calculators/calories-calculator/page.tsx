"use client"

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Activity, Share, Printer, Target, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

interface CalorieResult {
  bmr: number;
  tdee: number;
  weightLoss: number;
  weightGain: number;
  goal: string;
  timeline: string;
}

const activityLevels = {
  'sedentary': { multiplier: 1.2, label: 'Sedentary (little/no exercise)' },
  'light': { multiplier: 1.375, label: 'Light activity (light exercise 1-3 days/week)' },
  'moderate': { multiplier: 1.55, label: 'Moderate activity (moderate exercise 3-5 days/week)' },
  'active': { multiplier: 1.725, label: 'Very active (hard exercise 6-7 days/week)' },
  'extra': { multiplier: 1.9, label: 'Extra active (very hard exercise, physical job)' },
};

export default function CaloriesCalculatorPage() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState<CalorieResult | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateCalories = () => {
    if (!age || !height || !weight) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      let heightInCm: number;
      let weightInKg: number;

      if (unit === 'metric') {
        heightInCm = parseFloat(height);
        weightInKg = parseFloat(weight);
      } else {
        heightInCm = parseFloat(height) * 2.54; // inches to cm
        weightInKg = parseFloat(weight) * 0.453592; // lbs to kg
      }

      const ageNum = parseInt(age);

      // Calculate BMR using Mifflin-St Jeor Equation
      let bmr: number;
      if (gender === 'male') {
        bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageNum + 5;
      } else {
        bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageNum - 161;
      }

      // Calculate TDEE
      const activity = activityLevels[activityLevel as keyof typeof activityLevels];
      const tdee = bmr * activity.multiplier;

      // Calculate goals
      const weightLoss = tdee - 500; // 1 lb per week
      const weightGain = tdee + 500; // 1 lb per week

      let goalCalories: number;
      let goalDescription: string;
      let timeline: string;

      switch (goal) {
        case 'lose':
          goalCalories = weightLoss;
          goalDescription = 'Weight Loss (1 lb/week)';
          timeline = 'Lose 1 pound per week';
          break;
        case 'gain':
          goalCalories = weightGain;
          goalDescription = 'Weight Gain (1 lb/week)';
          timeline = 'Gain 1 pound per week';
          break;
        default:
          goalCalories = tdee;
          goalDescription = 'Maintain Weight';
          timeline = 'Maintain current weight';
      }

      setResult({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        weightLoss: Math.round(weightLoss),
        weightGain: Math.round(weightGain),
        goal: goalDescription,
        timeline: timeline,
      });
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (age && height && weight) {
      calculateCalories();
    }
  }, [age, height, weight, gender, activityLevel, goal, unit]);

  const shareResults = async () => {
    if (!result) return;

    const shareData = {
      title: 'My Calorie Calculator Results - MetricBuddy',
      text: `My daily calorie needs: ${result.tdee} calories (BMR: ${result.bmr}) - calculated with MetricBuddy!`,
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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Activity className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Calories Calculator</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate your daily caloric needs based on your goals, activity level, and body metrics.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Calculate Your Calorie Needs</CardTitle>
                <CardDescription>
                  Enter your information to get personalized calorie recommendations
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
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      min="1"
                      max="120"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <Select value={gender} onValueChange={setGender}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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

                <div className="space-y-2">
                  <Label>Activity Level</Label>
                  <Select value={activityLevel} onValueChange={setActivityLevel}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(activityLevels).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Goal</Label>
                  <Select value={goal} onValueChange={setGoal}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lose">Lose Weight</SelectItem>
                      <SelectItem value="maintain">Maintain Weight</SelectItem>
                      <SelectItem value="gain">Gain Weight</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {result && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Your Calorie Results</CardTitle>
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
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">BMR</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {result.bmr} cal
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Basal Metabolic Rate
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border bg-muted/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">TDEE</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {result.tdee} cal
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Total Daily Energy Expenditure
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border bg-primary/5">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Activity className="h-4 w-4 mr-2" />
                      Your Goal: {result.goal}
                    </h4>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {goal === 'lose' ? result.weightLoss : goal === 'gain' ? result.weightGain : result.tdee} calories/day
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.timeline}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Calorie Breakdown by Goal</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Weight Loss (1 lb/week):</span>
                        <span className="font-medium">{result.weightLoss} cal</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Maintain Weight:</span>
                        <span className="font-medium">{result.tdee} cal</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weight Gain (1 lb/week):</span>
                        <span className="font-medium">{result.weightGain} cal</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Understanding Your Results</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Key Terms</h4>
                  <ul className="space-y-1 text-sm">
                    <li><strong>BMR:</strong> Calories burned at rest</li>
                    <li><strong>TDEE:</strong> Total calories burned daily</li>
                    <li><strong>Calorie Deficit:</strong> Eating less than TDEE for weight loss</li>
                    <li><strong>Calorie Surplus:</strong> Eating more than TDEE for weight gain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Important Notes</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Results are estimates based on averages</li>
                    <li>Individual metabolism may vary</li>
                    <li>Consult healthcare providers for personalized advice</li>
                    <li>Combine with exercise for best results</li>
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