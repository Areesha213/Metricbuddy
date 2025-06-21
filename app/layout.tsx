import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { Toaster } from '@/components/ui/sonner';
import { BoltBadge } from '@/components/bolt-badge';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'MetricBuddy - Your Daily Life Calculator Suite',
    template: '%s | MetricBuddy'
  },
  description: 'Smarter tools for everyday life. Calculate BMI, sleep cycles, tips, cooking conversions, timezone conversions, calories, weight conversions and more with our beautiful, easy-to-use calculators.',
  keywords: [
    'calculator', 'BMI calculator', 'sleep calculator', 'tip calculator', 
    'cooking converter', 'timezone converter', 'calories calculator', 
    'weight converter', 'dream interpreter', 'daily tools', 'productivity',
    'health calculator', 'fitness calculator', 'cooking measurements',
    'time zone conversion', 'calorie counter', 'weight conversion'
  ],
  authors: [{ name: 'MetricBuddy', url: 'https://metricbuddy.online' }],
  creator: 'MetricBuddy',
  publisher: 'MetricBuddy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://metricbuddy.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MetricBuddy - Your Daily Life Calculator Suite',
    description: 'Smarter tools for everyday life. Calculate BMI, sleep cycles, tips, cooking conversions, and more with our beautiful calculators.',
    url: 'https://metricbuddy.online',
    siteName: 'MetricBuddy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MetricBuddy - Daily Life Calculators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetricBuddy - Your Daily Life Calculator Suite',
    description: 'Smarter tools for everyday life. Calculate BMI, sleep cycles, tips, cooking conversions, and more.',
    images: ['/og-image.png'],
    creator: '@metricbuddy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'productivity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* SEO-Optimized Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#4F46E5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#6366F1" media="(prefers-color-scheme: dark)" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        
        {/* PWA Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MetricBuddy" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* SEO Optimization */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href="https://metricbuddy.online" />
        
        {/* Performance Optimization */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <BoltBadge />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}