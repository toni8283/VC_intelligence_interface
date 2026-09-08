'use client';

import './globals.css';
import Sidebar from '@/components/Sidebar';
import { useEffect } from 'react';
import useStore from '@/lib/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hydrateFromStorage = useStore((state) => state.hydrateFromStorage);

  useEffect(() => {
    hydrateFromStorage();
  }, [hydrateFromStorage]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <div className="flex h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 transition-colors duration-200">
          <Sidebar />
          <main className="flex-1 overflow-auto bg-slate-50/60 dark:bg-[#080d1a]">{children}</main>
        </div>
      </body>
    </html>
  );
}
