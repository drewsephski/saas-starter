"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Zap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { useMediaQuery } from "@/hooks/use-media-query";

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice?: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  href: string;
  buttonText?: string;
  description?: string;
  badge?: string;
  highlightColor?: string;
  icon?: React.ReactNode;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you. Start with a 14-day free trial. No credit card required.",
}: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const switchRef = useRef<HTMLButtonElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isMonthly = !isYearly;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (checked: boolean) => {
    setIsYearly(checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
      });
    }
  };

  if (!mounted) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1 text-sm font-medium text-white">
          <Sparkles className="mr-2 h-4 w-4" />
          {title}
        </div>
        <h2 className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Choose Your Perfect Plan
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {description}
          <span className="mt-2 block text-sm text-orange-500">
            {isYearly ? '✨ Annual billing saves you 20%' : 'Switch to annual billing to save 20%'}
          </span>
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <span className={cn(
            "text-sm font-medium transition-colors",
            !isYearly ? "text-foreground" : "text-muted-foreground"
          )}>
            Monthly
          </span>
          <Switch
            ref={switchRef}
            checked={isYearly}
            onCheckedChange={handleToggle}
            className="data-[state=checked]:bg-orange-500"
          />
          <div className="flex items-center">
            <span className={cn(
              "text-sm font-medium transition-colors",
              isYearly ? "text-foreground" : "text-muted-foreground"
            )}>
              Annually
            </span>
            <span className="ml-2 rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
              Save 20%
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={fadeInUp}
            className={cn(
              "group relative flex flex-col rounded-2xl border border-gray-200/50 border-solid bg-white/50 p-0.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800/50 dark:bg-gray-900/50",
              plan.isPopular && "border-orange-500/30 dark:border-orange-500/20"
            )}
            onMouseEnter={() => setHoveredPlan(plan.name)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-all duration-500 group-hover:opacity-100",
                  'from-orange-500 to-amber-400'
                )}
                style={{
                  maskImage: 'radial-gradient(ellipse at center, white 0%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, white 0%, transparent 70%)',
                }}
              />
            </div>

            <div className={cn(
              "relative flex h-full flex-col rounded-[15px] bg-white/80 p-6 dark:bg-gray-900/80",
              plan.isPopular && "bg-white dark:bg-gray-900"
            )}>
              {plan.isPopular && (
                <div className="absolute right-0 top-0 -mr-1 -mt-1">
                  <div className="rounded-bl-lg rounded-tr-lg bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-xs font-semibold text-white">
                    {plan.badge || 'POPULAR'}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                {plan.icon || <Zap className="h-6 w-6 text-orange-500" />}
                <h3 className="text-lg sm:text-xl font-bold text-foreground">{plan.name}</h3>
              </div>
183 |
              <div className="mt-6 flex items-baseline">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {plan.price === 'Custom' ? 'Custom' : `$${isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price}`}
                </span>
                {plan.period !== 'month' && plan.price !== 'Custom' && (
                  <span className="ml-2 text-sm font-medium text-muted-foreground">
                    /{plan.period}
                  </span>
                )}
              </div>

              {isYearly && plan.price !== 'Custom' && plan.yearlyPrice && plan.price !== plan.yearlyPrice && (
                <p className="mt-1 text-xs text-green-500">
                  Save ${(parseInt(plan.price) * 12) - (parseInt(plan.yearlyPrice) * 12)} annually
                </p>
              )}

              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 shrink-0 text-green-500" />
                    <span className="ml-3 text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  className={cn(
                    "group relative w-full overflow-hidden rounded-lg px-6 py-3 font-medium transition-all duration-300",
                    plan.isPopular
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:shadow-orange-500/30"
                      : "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
                  )}
                  size="lg"
                  asChild
                >
                  <Link href={'/app' + (plan.href || '#')}>
                    <span className="relative z-10 flex items-center justify-center">
                      {plan.buttonText || 'Get Started'}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    {plan.isPopular && (
                      <span className="absolute inset-0 -z-0 bg-[length:200%_200%] bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 opacity-0 transition-all duration-500 group-hover:animate-shine group-hover:opacity-100" />
                    )}
                  </Link>
                </Button>
              </div>
            </div>

            {hoveredPlan === plan.name && (
              <div className="absolute -inset-1 -z-10 rounded-2xl opacity-70 blur-lg transition duration-300 bg-gradient-to-r from-orange-500 to-amber-500" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
