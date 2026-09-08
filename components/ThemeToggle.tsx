'use client';

import { Sun, Moon } from 'lucide-react';
import useStore from '@/lib/store';

export default function ThemeToggle({
  showLabel = false,
  className = '',
}: {
  showLabel?: boolean;
  className?: string;
}) {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-200 border text-slate-500 hover:text-slate-900 hover:bg-slate-100 border-slate-200 dark:border-slate-800 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/80 ${className}`}
    >
      {darkMode ? (
        <Sun size={18} className="text-slate-300 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon size={18} className="text-slate-600 transition-transform duration-200 hover:-rotate-12" />
      )}
      {showLabel && (
        <span className="ml-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
          {darkMode ? 'Light mode' : 'Dark mode'}
        </span>
      )}
    </button>
  );
}

