import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 className="w-6 h-6" />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut className="w-6 h-6" />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar className="w-6 h-6" />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud className="w-6 h-6" />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft className="w-6 h-6" />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. At least our AI Agents are.",
      icon: <IconHelp className="w-6 h-6" />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you do not like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt className="w-6 h-6" />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-4">
            Everything you need
          </h2>
          <p className="mx-auto w-full max-w-xl text-center text-gray-300 md:text-xl">
            Powerful features to help you build faster and ship more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-8 px-6 relative group/feature transition-all duration-300 hover:bg-gray-800/30",
        (index === 0 || index === 4) && "lg:border-l border-gray-800",
        index < 4 && "lg:border-b border-gray-800"
      )}
    >
      <div className="mb-4 relative z-10 text-orange-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white ml-4">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-400 max-w-xs relative z-10">
        {description}
      </p>
    </div>
  );
};
