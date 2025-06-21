import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AlertCircle, Home, Calculator } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <AlertCircle className="h-24 w-24 text-muted-foreground" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              404
            </h1>
            <h2 className="text-2xl font-semibold">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. 
              The calculator you're looking for might have moved or doesn't exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/calculators">
                <Calculator className="mr-2 h-4 w-4" />
                Browse Calculators
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Popular Calculators</h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              <Link 
                href="/calculators/bmi-calculator" 
                className="text-sm text-primary hover:underline"
              >
                BMI Calculator
              </Link>
              <Link 
                href="/calculators/sleep-calculator" 
                className="text-sm text-primary hover:underline"
              >
                Sleep Calculator
              </Link>
              <Link 
                href="/calculators/tip-calculator" 
                className="text-sm text-primary hover:underline"
              >
                Tip Calculator
              </Link>
              <Link 
                href="/calculators/cooking-converter" 
                className="text-sm text-primary hover:underline"
              >
                Cooking Converter
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}