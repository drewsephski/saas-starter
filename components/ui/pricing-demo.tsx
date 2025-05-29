"use client";

import { motion } from "framer-motion";
import { Pricing, PricingPlan } from "@/components/ui/pricing";
import { Sparkles, Zap, Check, Shield, BarChart, Code, ZapIcon, Infinity as InfinityIcon } from "lucide-react";

const demoPlans: PricingPlan[] = [
  {
    name: "STARTER",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
    icon: <Zap className="h-5 w-5 text-blue-500" />,
    badge: "Starter",
    highlightColor: "from-blue-500 to-cyan-400"
  },
  {
    name: "PROFESSIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response",
      "Full API access",
      "Priority support",
      "Custom domains",
    ],
    description: "For growing teams and businesses",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
    icon: <BarChart className="h-5 w-5 text-purple-500" />,
    badge: "Most Popular",
    highlightColor: "from-purple-500 to-pink-500"
  },
  {
    name: "ENTERPRISE",
    price: "199",
    yearlyPrice: "159",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics + AI",
      "1-hour support response",
      "Dedicated manager",
      "Custom integrations",
      "99.9% uptime SLA",
    ],
    description: "For large organizations with custom needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
    icon: <Shield className="h-5 w-5 text-orange-500" />,
    badge: "Enterprise",
    highlightColor: "from-orange-500 to-amber-400"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function PricingDemo() {
  return (
    <div className="w-full">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="relative"
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
        
        <Pricing 
          plans={demoPlans}
          title="Simple, Transparent Pricing"
          description="Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support."
        />
        
        <motion.div 
          variants={item}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>Need something custom? <a href="/contact" className="text-orange-500 hover:underline font-medium">Contact our sales team</a></p>
        </motion.div>
      </motion.div>
    </div>
  );
}
