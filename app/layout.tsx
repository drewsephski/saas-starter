import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from 'swr';
import { FloatingDock } from '@/components/ui/floating-dock';
import { Home, Settings, User, FileText, Plus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Next.js SaaS Starter',
  description: 'Get started quickly with Next.js, Postgres, and Stripe.'
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-gray-400 dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-400 dark:bg-gray-950 flex flex-col">
        <SWRConfig
          value={{
            fallback: {
              // We do NOT await here
              // Only components that read this data will suspend
              '/api/user': getUser(),
              '/api/team': getTeamForUser()
            }
          }}
        >
          <div className="flex-1">
            {children}
          </div>
          <FloatingDock
            items={[
              { title: 'Home', icon: <Home className="h-4 w-4" />, href: '/' },
              { title: 'Documents', icon: <FileText className="h-4 w-4" />, href: '/documents' },
              { title: 'New', icon: <Plus className="h-4 w-4" />, href: '/new' },
              { title: 'Profile', icon: <User className="h-4 w-4" />, href: '/profile' },
              { title: 'Settings', icon: <Settings className="h-4 w-4" />, href: '/settings' }
            ]}
            desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
            mobileClassName="fixed bottom-4 right-4 z-50"
          />
        </SWRConfig>
      </body>
    </html>
  );
}
