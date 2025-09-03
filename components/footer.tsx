import Link from 'next/link';
import { Calculator, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex items-center space-x-2">
            <Calculator className="h-5 w-5 text-primary" />
            <span className="font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              MetricBuddy
            </span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with <Heart className="inline h-4 w-4 text-red-500" /> for everyday calculations
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
