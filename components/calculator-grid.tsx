"use client"

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Moon, 
  Scale, 
  Calculator, 
  ChefHat, 
  Clock, 
  Activity, 
  Weight,
  Brain
} from 'lucide-react';
import { motion } from 'framer-motion';

const calculators = [
  {
    title: 'Sleep Calculator',
    description: 'Calculate optimal sleep and wake times based on sleep cycles',
    icon: Moon,
    href: '/calculators/sleep-calculator',
    badge: 'Popular',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index and health status',
    icon: Scale,
    href: '/calculators/bmi-calculator',
    badge: 'Health',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Tip Calculator',
    description: 'Calculate tips and split bills with ease',
    icon: Calculator,
    href: '/calculators/tip-calculator',
    badge: 'Utility',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Cooking Converter',
    description: 'Convert cups to grams and other cooking measurements',
    icon: ChefHat,
    href: '/calculators/cooking-converter',
    badge: 'Kitchen',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Timezone Converter',
    description: 'Convert time between different timezones worldwide',
    icon: Clock,
    href: '/calculators/timezone-converter',
    badge: 'Travel',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Calories Calculator',
    description: 'Calculate daily caloric needs and track intake',
    icon: Activity,
    href: '/calculators/calories-calculator',
    badge: 'Fitness',
    color: 'from-teal-500 to-green-500',
  },
  {
    title: 'Weight Converter',
    description: 'Convert between different weight units instantly',
    icon: Weight,
    href: '/calculators/weight-converter',
    badge: 'Converter',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Dream Interpreter',
    description: 'Explore the meanings behind your dreams',
    icon: Brain,
    href: '/calculators/dream-interpreter',
    badge: 'Bonus',
    color: 'from-violet-500 to-purple-500',
  },
];

export function CalculatorGrid() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Featured Calculators
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose from our collection of powerful, easy-to-use calculators designed for your daily needs.
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-4">
        {calculators.map((calculator, index) => {
          const Icon = calculator.icon;
          return (
            <motion.div
              key={calculator.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={calculator.href} className="group">
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${calculator.color} text-white`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {calculator.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {calculator.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed">
                      {calculator.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}