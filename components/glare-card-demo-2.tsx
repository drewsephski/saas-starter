import { GlareCard } from "@/components/ui/glare-card";

export default function GlareCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* Next.js and React Card */}
      <GlareCard className="flex flex-col p-6 h-full rounded-2xl">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
          <svg viewBox="0 0 24 24" className="h-6 w-6">
            <path
              fill="currentColor"
              d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-medium text-white">
          Next.js and React
        </h2>
        <p className="mt-2 text-gray-300">
          Leverage the power of modern web technologies for optimal
          performance and developer experience.
        </p>
      </GlareCard>

      {/* Postgres and Drizzle ORM Card */}
      <GlareCard className="flex flex-col p-6 h-full rounded-2xl">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5v14c0 1.1 2.7 2 6 2s6-.9 6-2V5"></path>
            <path d="M3 12c0 1.1 2.7 2 6 2s6-.9 6-2"></path>
            <path d="M21 5v6"></path>
            <path d="M15 19c3.3 0 6-1 6-2v-6"></path>
          </svg>
        </div>
        <h2 className="text-lg font-medium text-white">
          Postgres and Drizzle ORM
        </h2>
        <p className="mt-2 text-gray-300">
          Robust database solution with an intuitive ORM for efficient
          data management and scalability.
        </p>
      </GlareCard>

      {/* Stripe Integration Card */}
      <GlareCard className="flex flex-col p-6 h-full rounded-2xl">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
            <path d="M6 12h.01M10 12h4"></path>
          </svg>
        </div>
        <h2 className="text-lg font-medium text-white">
          Stripe Integration
        </h2>
        <p className="mt-2 text-gray-300">
          Seamless payment processing and subscription management with
          industry-leading Stripe integration.
        </p>
      </GlareCard>
    </div>
  );
}
