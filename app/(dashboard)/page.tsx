import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { Terminal } from './terminal';
import { HyperText } from '@/components/magicui/hyper-text';
import GlareCardDemo from '@/components/glare-card-demo-2';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-2';
import { PricingDemo } from '@/components/ui/pricing-demo';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { SplineSceneBasic } from '@/components/ui/spline-demo';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-6xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                <HyperText className="block">
                  Build Your SaaS
                </HyperText>
                <HyperText className="block text-orange-500">
                  Faster Than Ever
                </HyperText>
              </h1>
              <p className="mt-3 text-gray-900 dark:text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Launch your SaaS product in record time with our powerful,
                ready-to-use template. Packed with modern technologies and
                essential integrations.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="https://vercel.com/templates/next.js/next-js-saas-starter"
                  target="_blank"
                >
                  <InteractiveHoverButton
                    className="text-lg rounded-full"
                  >
                    Deploy your own
                  </InteractiveHoverButton>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlareCardDemo />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-black/[0.03] dark:bg-grid-white/[0.03]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <FeaturesSectionDemo />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-dot-black/[0.05] dark:bg-dot-white/[0.05]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <PricingDemo />
          </div>
        </div>
      </section>

      {/* 3D Spline Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 py-16 sm:py-24 md:py-32 relative z-10">
          <SplineSceneBasic />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="relative z-10">
          <TestimonialsDemo />
        </div>
      </section>

      <section className="py-16 bg-gray-200 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                Ready to launch your SaaS?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
                Our template provides everything you need to get your SaaS up
                and running quickly. Don't waste time on boilerplate - focus on
                what makes your product unique.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a href="https://github.com/nextjs/saas-starter" target="_blank">
                <InteractiveHoverButton
                  className="text-lg rounded-full"
                >
                  View the code
                </InteractiveHoverButton>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
