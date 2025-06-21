"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          <Sparkles className="h-4 w-4" />
          <span>Your Daily Life Calculator Suite</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Meet{" "}
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            MetricBuddy
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        >
          Smarter tools for everyday life. Calculate BMI, sleep cycles, tips, cooking conversions, 
          and more with our beautiful, easy-to-use calculators designed for productivity and accuracy.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-x-4"
        >
          <Button size="lg" asChild>
            <Link href="/calculators">
              <Calculator className="mr-2 h-4 w-4" />
              Explore Calculators
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}