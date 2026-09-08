'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { List, Star, Building2, Sun, Moon } from 'lucide-react';
import useStore from '@/lib/store';

export default function Sidebar() {
  const pathname = usePathname();
  const lists = useStore((state) => state.lists);
  const savedCompanies = useStore((state) => state.savedCompanies);
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  const savedCount = Object.keys(savedCompanies).length;

  const isActive = (path: string) => pathname === path || (path !== '/' && pathname.startsWith(path + '/'));

  const navItems = [
    { href: '/', label: 'Companies', icon: Building2, badge: '200+' },
    { href: '/lists', label: 'Custom Lists', icon: List, count: lists.length },
    { href: '/saved', label: 'Saved Startups', icon: Star, count: savedCount },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-[#0c1220] border-r border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between transition-colors duration-200 select-none">
      {/* Brand Header */}
      <div>
        <div className="px-6 py-6 border-b border-slate-100 dark:border-slate-800/60">
          <Link href="/" className="inline-block group">
            <div className="flex items-baseline">
              <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:opacity-80 transition-opacity">
                TB
              </span>
              <span className="text-2xl font-serif italic font-normal text-slate-400 dark:text-slate-400 ml-1">
                scout
              </span>
            </div>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium tracking-wide mt-0.5">
              Venture Intelligence
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Platform
          </div>
          {navItems.map(({ href, label, icon: Icon, badge, count }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                  active
                    ? 'bg-blue-50/90 dark:bg-blue-950/50 text-accent dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={17}
                    className={
                      active
                        ? 'text-accent dark:text-blue-400'
                        : 'text-slate-400 dark:text-slate-500'
                    }
                  />
                  <span>{label}</span>
                </div>
                {badge && (
                  <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {badge}
                  </span>
                )}
                {typeof count === 'number' && count > 0 && (
                  <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer: Single-Color Theme Switcher & Minimal Tag */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800/60 space-y-3">
        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Theme
          </span>
          <div className="flex items-center bg-slate-200/60 dark:bg-slate-800 p-0.5 rounded-lg">
            <button
              type="button"
              onClick={() => darkMode && toggleDarkMode()}
              title="Light mode"
              aria-label="Light mode"
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition ${
                !darkMode
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Sun size={13} className="text-slate-600 dark:text-slate-400" />
              <span>Light</span>
            </button>
            <button
              type="button"
              onClick={() => !darkMode && toggleDarkMode()}
              title="Dark mode"
              aria-label="Dark mode"
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition ${
                darkMode
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Moon size={13} className="text-slate-300" />
              <span>Dark</span>
            </button>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 dark:text-slate-500 px-1">
          <span>TB scout</span>
        </div>
      </div>
    </aside>
  );
}
