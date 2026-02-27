'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { List, Bookmark, Home } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  const navItems = [
    { href: '/', label: 'Companies', icon: Home },
    { href: '/lists', label: 'Lists', icon: List },
    { href: '/saved', label: 'Saved Searches', icon: Bookmark },
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-8 border-b border-slate-200">
        <h1 className="text-xl font-bold text-slate-900">VC Scout</h1>
        <p className="text-xs text-slate-500 mt-1">Precision discovery engine</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              isActive(href)
                ? 'bg-blue-50 text-accent font-semibold'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-6 border-t border-slate-200">
        <p className="text-xs text-slate-400">Toni Blair creation</p>
      </div>
    </div>
  );
}
