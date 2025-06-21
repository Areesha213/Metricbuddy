import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Bug, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - MetricBuddy',
  description: 'Get in touch with the MetricBuddy team. We love hearing from our users and welcome feedback, suggestions, and questions.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="h-8 w-8 text-primary" />
              <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Contact Us
              </h1>
            </div>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We love hearing from our users! Whether you have feedback, suggestions, or questions, 
              we're here to help.
            </p>
          </div>
        </section>

        <section className="container pb-8 md:pb-12 lg:pb-24">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-blue-500" />
                    <span>General Inquiries</span>
                  </CardTitle>
                  <CardDescription>
                    Questions about MetricBuddy or need help using our calculators?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For general questions, support, or if you need help using any of our calculators, 
                    please reach out to us.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <a 
                        href="mailto:hello@metricbuddy.online" 
                        className="text-primary hover:underline"
                      >
                        hello@metricbuddy.online
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bug className="h-5 w-5 text-red-500" />
                    <span>Bug Reports</span>
                  </CardTitle>
                  <CardDescription>
                    Found a bug or something not working as expected?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Help us improve MetricBuddy by reporting any bugs or issues you encounter. 
                    Please include details about what you were doing when the issue occurred.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <a 
                        href="mailto:bugs@metricbuddy.online" 
                        className="text-primary hover:underline"
                      >
                        bugs@metricbuddy.online
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    <span>Feature Requests</span>
                  </CardTitle>
                  <CardDescription>
                    Have an idea for a new calculator or feature?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    We're always looking to improve and add new calculators based on user feedback. 
                    Share your ideas with us!
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <a 
                        href="mailto:features@metricbuddy.online" 
                        className="text-primary hover:underline"
                      >
                        features@metricbuddy.online
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-green-500" />
                    <span>Business Inquiries</span>
                  </CardTitle>
                  <CardDescription>
                    Interested in partnerships or business opportunities?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For business partnerships, advertising opportunities, or other commercial inquiries, 
                    please contact our business team.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <a 
                        href="mailto:business@metricbuddy.online" 
                        className="text-primary hover:underline"
                      >
                        business@metricbuddy.online
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We typically respond to emails within 24-48 hours during business days. 
                  For urgent issues, please mark your email as "URGENT" in the subject line.
                </p>
                <p>
                  When contacting us about a bug or technical issue, please include:
                </p>
                <ul>
                  <li>Your device type and operating system</li>
                  <li>Your browser name and version</li>
                  <li>Steps to reproduce the issue</li>
                  <li>Screenshots if applicable</li>
                </ul>
                <p>
                  This information helps us resolve issues more quickly and effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Thank You!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  MetricBuddy exists because of users like you. Your feedback, suggestions, and 
                  support help us create better tools for everyone. We genuinely appreciate every 
                  message we receive and read them all personally.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}