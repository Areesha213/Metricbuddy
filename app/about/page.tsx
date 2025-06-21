import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Zap, Shield, Globe, Heart, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About MetricBuddy - Your Daily Life Calculator Suite',
  description: 'Learn about MetricBuddy, the comprehensive calculator suite designed to make your daily calculations simple, accurate, and beautiful.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="h-8 w-8 text-primary" />
              <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                About MetricBuddy
              </h1>
            </div>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Your comprehensive suite of daily life calculators, designed with modern technology 
              and user experience in mind.
            </p>
          </div>
        </section>

        <section className="container pb-8 md:pb-12 lg:pb-24">
          <div className="mx-auto max-w-4xl space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  MetricBuddy was created with a simple mission: to make everyday calculations 
                  simple, accurate, and beautiful. We believe that the tools you use daily should 
                  be intuitive, fast, and designed with care.
                </p>
                <p>
                  Whether you're calculating your BMI, planning your sleep schedule, splitting a 
                  restaurant bill, or converting cooking measurements, MetricBuddy provides the 
                  tools you need in a clean, modern interface that works perfectly on any device.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span>What Makes Us Different</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2">🎨</span>
                      <span>Beautiful, modern design that's a pleasure to use</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">⚡</span>
                      <span>Lightning-fast calculations with instant results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">📱</span>
                      <span>Fully responsive design that works on all devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🔒</span>
                      <span>Privacy-first approach with local calculations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🌙</span>
                      <span>Dark mode support for comfortable use anytime</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span>Who We Serve</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2">👩‍⚕️</span>
                      <span>Health-conscious individuals tracking BMI and calories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">👨‍🍳</span>
                      <span>Home cooks needing precise measurement conversions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✈️</span>
                      <span>Travelers managing timezones and currency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🍽️</span>
                      <span>Diners splitting bills and calculating tips</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">😴</span>
                      <span>Anyone looking to optimize their sleep schedule</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Privacy & Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Your privacy is our priority. All calculations are performed locally in your 
                  browser, meaning your personal data never leaves your device. We don't store, 
                  track, or share any of the information you enter into our calculators.
                </p>
                <p>
                  MetricBuddy is built with modern web technologies and follows best practices 
                  for security and performance. Our application works offline as a Progressive 
                  Web App (PWA), so you can use it even without an internet connection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-purple-500" />
                  <span>Technology & Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Built With</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Next.js 13+ with App Router</li>
                      <li>• TypeScript for type safety</li>
                      <li>• Tailwind CSS for styling</li>
                      <li>• Framer Motion for animations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Features</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• SEO optimized for discoverability</li>
                      <li>• PWA support for offline use</li>
                      <li>• Accessible design (WCAG compliant)</li>
                      <li>• Google Analytics integration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}