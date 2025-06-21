import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - MetricBuddy',
  description: 'Learn how MetricBuddy protects your privacy. We are committed to keeping your personal information secure and private.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Privacy Policy
              </h1>
            </div>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Your privacy is our priority. Learn how we protect and handle your information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>
        </section>

        <section className="container pb-8 md:pb-12 lg:pb-24">
          <div className="mx-auto max-w-4xl space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Commitment to Your Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  At MetricBuddy, we are committed to protecting your privacy and ensuring that your 
                  personal information remains secure. This Privacy Policy explains how we collect, 
                  use, and protect your information when you use our calculator suite.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4>Calculator Data</h4>
                <p>
                  All calculations you perform on MetricBuddy (BMI calculations, sleep schedules, 
                  tip calculations, etc.) are processed locally in your browser. This data is not 
                  transmitted to our servers, stored, or shared with third parties.
                </p>

                <h4>Usage Analytics</h4>
                <p>
                  We use Google Analytics to understand how our website is used. This includes:
                </p>
                <ul>
                  <li>Pages visited and time spent on site</li>
                  <li>Device type, browser, and operating system</li>
                  <li>General geographic location (country/region level)</li>
                  <li>Referral sources (how you found our site)</li>
                </ul>

                <h4>Technical Information</h4>
                <p>
                  We automatically collect certain technical information necessary for website 
                  functionality:
                </p>
                <ul>
                  <li>IP address (anonymized)</li>
                  <li>Browser type and version</li>
                  <li>Device characteristics</li>
                  <li>Error logs for debugging purposes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We use collected information to:</p>
                <ul>
                  <li>Improve website performance and user experience</li>
                  <li>Understand which calculators are most popular</li>
                  <li>Fix technical issues and bugs</li>
                  <li>Develop new features based on usage patterns</li>
                  <li>Ensure website security and prevent abuse</li>
                </ul>
                <p>
                  <strong>We never use your calculation data for any purpose.</strong> All calculations 
                  remain private and are processed entirely on your device.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Storage and Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4>Local Processing</h4>
                <p>
                  All calculator functions work entirely in your browser. Your BMI, sleep schedules, 
                  tip calculations, and other personal data never leave your device.
                </p>

                <h4>Analytics Data</h4>
                <p>
                  Analytics data is stored by Google Analytics according to their data retention 
                  policies. We have configured our analytics to automatically delete user data 
                  after 26 months.
                </p>

                <h4>Security Measures</h4>
                <p>
                  We implement industry-standard security measures including:
                </p>
                <ul>
                  <li>HTTPS encryption for all data transmission</li>
                  <li>Content Security Policy (CSP) headers</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Minimal data collection practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4>Google Analytics</h4>
                <p>
                  We use Google Analytics to understand website usage. Google Analytics uses cookies 
                  to collect anonymous usage statistics. You can opt out of Google Analytics by 
                  visiting the Google Analytics opt-out page.
                </p>

                <h4>Hosting and CDN</h4>
                <p>
                  Our website is hosted on Vercel/Netlify, which may collect server logs for 
                  performance and security purposes. These services are GDPR compliant and have 
                  their own privacy policies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Local Storage</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4>Cookies We Use</h4>
                <ul>
                  <li><strong>Analytics cookies:</strong> Google Analytics tracking</li>
                  <li><strong>Preference cookies:</strong> Theme selection (dark/light mode)</li>
                  <li><strong>Functional cookies:</strong> Remember your calculator preferences</li>
                </ul>

                <h4>Managing Cookies</h4>
                <p>
                  You can control cookies through your browser settings. Disabling cookies may 
                  affect some website functionality, such as remembering your theme preference.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>You have the right to:</p>
                <ul>
                  <li>Know what personal information we collect about you</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of analytics tracking</li>
                  <li>Access any personal data we hold about you</li>
                  <li>Correct inaccurate personal information</li>
                </ul>
                <p>
                  Since we collect minimal personal information and process calculations locally, 
                  most of your data never reaches our servers. For questions about your privacy 
                  rights, contact us at privacy@metricbuddy.online.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  MetricBuddy is designed for general audiences and does not knowingly collect 
                  personal information from children under 13. If you believe we have inadvertently 
                  collected information from a child under 13, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will post 
                  the updated policy on this page with a new "Last updated" date. We encourage 
                  you to review this policy periodically.
                </p>
                <p>
                  For significant changes, we may provide additional notice through our website 
                  or email (if you have provided us with your email address).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If you have questions about this Privacy Policy or our privacy practices, 
                  please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> privacy@metricbuddy.online<br />
                  <strong>Subject:</strong> Privacy Policy Question
                </p>
                <p>
                  We will respond to privacy-related inquiries within 30 days.
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