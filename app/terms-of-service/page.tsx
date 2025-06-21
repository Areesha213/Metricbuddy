import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - MetricBuddy',
  description: 'Read the terms of service for MetricBuddy. Understand your rights and responsibilities when using our calculator suite.',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Terms of Service
              </h1>
            </div>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Please read these terms carefully before using MetricBuddy.
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
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  By accessing and using MetricBuddy ("Service"), you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by the 
                  above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  MetricBuddy is a web-based calculator suite that provides various calculation 
                  tools including but not limited to:
                </p>
                <ul>
                  <li>BMI (Body Mass Index) calculator</li>
                  <li>Sleep cycle calculator</li>
                  <li>Tip calculator</li>
                  <li>Cooking measurement converter</li>
                  <li>Timezone converter</li>
                  <li>Calorie calculator</li>
                  <li>Weight converter</li>
                  <li>Other utility calculators</li>
                </ul>
                <p>
                  All calculations are performed locally in your browser and are provided for 
                  informational purposes only.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Use License</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Permission is granted to temporarily use MetricBuddy for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, 
                  not a transfer of title, and under this license you may not:
                </p>
                <ul>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Attempt to reverse engineer, decompile, or disassemble the service</li>
                </ul>
                <p>
                  This license shall automatically terminate if you violate any of these restrictions 
                  and may be terminated by us at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accuracy of Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  While we strive to provide accurate calculations and information, MetricBuddy 
                  makes no warranties, expressed or implied, and hereby disclaims all warranties 
                  including without limitation, implied warranties or conditions of merchantability, 
                  fitness for a particular purpose, or non-infringement of intellectual property 
                  or other violation of rights.
                </p>
                <p>
                  <strong>Medical Disclaimer:</strong> Health-related calculators (BMI, calorie, etc.) 
                  are for informational purposes only and should not replace professional medical 
                  advice. Always consult with healthcare professionals for medical decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>When using MetricBuddy, you agree to:</p>
                <ul>
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not use the service to harm, threaten, or harass others</li>
                  <li>Not transmit viruses, malware, or other harmful code</li>
                  <li>Not attempt to scrape, copy, or redistribute our content without permission</li>
                  <li>Verify calculation results when accuracy is critical</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy and Data</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Your privacy is important to us. All calculations are performed locally in 
                  your browser and are not transmitted to our servers. For detailed information 
                  about how we handle data, please review our Privacy Policy.
                </p>
                <p>
                  By using MetricBuddy, you consent to the collection and use of information 
                  as outlined in our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitations of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  In no event shall MetricBuddy or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to 
                  business interruption) arising out of the use or inability to use MetricBuddy, 
                  even if MetricBuddy or a MetricBuddy authorized representative has been notified 
                  orally or in writing of the possibility of such damage.
                </p>
                <p>
                  Some jurisdictions do not allow limitations on implied warranties, or limitations 
                  of liability for consequential or incidental damages, so these limitations may 
                  not apply to you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We strive to maintain high availability of MetricBuddy, but we do not guarantee 
                  that the service will be available at all times. The service may be temporarily 
                  unavailable due to:
                </p>
                <ul>
                  <li>Maintenance and updates</li>
                  <li>Technical difficulties</li>
                  <li>Internet connectivity issues</li>
                  <li>Force majeure events</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue the service at any time 
                  without prior notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  The service and its original content, features, and functionality are and will 
                  remain the exclusive property of MetricBuddy and its licensors. The service is 
                  protected by copyright, trademark, and other laws. Our trademarks and trade dress 
                  may not be used in connection with any product or service without our prior 
                  written consent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We may terminate or suspend your access to the service immediately, without prior 
                  notice or liability, for any reason whatsoever, including without limitation if 
                  you breach the Terms.
                </p>
                <p>
                  Upon termination, your right to use the service will cease immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms 
                  at any time. If a revision is material, we will try to provide at least 30 days 
                  notice prior to any new terms taking effect.
                </p>
                <p>
                  Your continued use of the service following the posting of any changes to these 
                  Terms constitutes acceptance of those changes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  These Terms shall be interpreted and governed by the laws of the jurisdiction 
                  in which MetricBuddy operates, without regard to its conflict of law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be 
                  considered a waiver of those rights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> legal@metricbuddy.online<br />
                  <strong>Subject:</strong> Terms of Service Question
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