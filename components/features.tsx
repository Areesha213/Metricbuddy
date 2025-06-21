"use client"

import { Smartphone, Zap, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Mobile Optimized',
    description: 'Works perfectly on all devices with responsive design and PWA support.',
    icon: Smartphone,
  },
  {
    title: 'Lightning Fast',
    description: 'Instant calculations with optimized performance and minimal loading times.',
    icon: Zap,
  },
  {
    title: 'Privacy First',
    description: 'Your data stays private. All calculations are performed locally on your device.',
    icon: Shield,
  },
  {
    title: 'Always Accessible',
    description: 'Available 24/7 from anywhere in the world with no installation required.',
    icon: Globe,
  },
];

export function Features() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Why Choose MetricBuddy?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Built with modern technology and user experience in mind.
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg border bg-background p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}