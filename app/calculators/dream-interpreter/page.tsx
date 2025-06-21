import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Clock, Sparkles, Bell } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dream Interpreter - Coming Soon | MetricBuddy',
  description: 'Dream Interpreter is coming soon to MetricBuddy! Explore the meanings behind your dreams with our AI-powered interpretation tool. Get notified when it launches.',
  keywords: [
    'dream interpreter', 'dream meaning', 'dream analysis', 'dream symbols',
    'dream dictionary', 'sleep dreams', 'subconscious mind', 'dream psychology',
    'coming soon', 'MetricBuddy'
  ],
  openGraph: {
    title: 'Dream Interpreter - Coming Soon | MetricBuddy',
    description: 'Dream Interpreter is coming soon to MetricBuddy! Explore the meanings behind your dreams with our AI-powered interpretation tool.',
    url: 'https://metricbuddy.online/calculators/dream-interpreter',
    type: 'website',
  },
  alternates: {
    canonical: '/calculators/dream-interpreter',
  },
};

export default function DreamInterpreterComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Dream Interpreter</h1>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="h-5 w-5 text-orange-500" />
              <span className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                Coming Soon
              </span>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're working on an amazing Dream Interpreter that will help you explore the meanings behind your dreams.
            </p>
          </div>

          <Card className="border-2 border-dashed border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span>What's Coming</span>
              </CardTitle>
              <CardDescription>
                Get ready for an incredible dream analysis experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">🧠 AI-Powered Analysis</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Advanced dream symbol interpretation</li>
                    <li>• Personalized meaning analysis</li>
                    <li>• Cultural and psychological insights</li>
                    <li>• Pattern recognition across dreams</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">📚 Comprehensive Database</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Thousands of dream symbols</li>
                    <li>• Multiple interpretation perspectives</li>
                    <li>• Historical and modern meanings</li>
                    <li>• Interactive dream journal</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">🎯 Smart Features</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Emotion and mood tracking</li>
                    <li>• Dream category classification</li>
                    <li>• Recurring dream detection</li>
                    <li>• Shareable interpretations</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">🔒 Privacy Focused</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Local processing when possible</li>
                    <li>• Encrypted dream storage</li>
                    <li>• Anonymous analysis options</li>
                    <li>• Complete data control</li>
                  </ul>
                </div>
              </div>

              <div className="text-center space-y-4 pt-6 border-t">
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <Bell className="h-5 w-5" />
                  <span className="font-semibold">Want to be notified when it launches?</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Follow our updates and be the first to explore your dreams with MetricBuddy's Dream Interpreter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contact">
                      Get Notified
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/calculators">
                      Explore Other Calculators
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Dream Interpretation Matters</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3">Understanding Your Subconscious</h4>
                  <p className="text-sm text-muted-foreground">
                    Dreams offer a window into our subconscious mind, revealing hidden thoughts, 
                    emotions, and desires that we might not be aware of during our waking hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Personal Growth & Insight</h4>
                  <p className="text-sm text-muted-foreground">
                    By understanding dream symbols and patterns, you can gain valuable insights 
                    into your personal challenges, relationships, and life direction.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Emotional Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Dreams help process daily experiences and emotions, and interpreting them 
                    can provide clarity on unresolved feelings or situations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Creative Inspiration</h4>
                  <p className="text-sm text-muted-foreground">
                    Many artists, writers, and innovators have found inspiration in their dreams. 
                    Understanding your dreams might unlock your creative potential.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              We're putting the finishing touches on this amazing tool. In the meantime, 
              explore our other calculators and tools designed to make your daily life easier.
            </p>
            <Button asChild variant="outline">
              <Link href="/calculators">
                <Brain className="mr-2 h-4 w-4" />
                Explore All Calculators
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}