'use client';

import Link from 'next/link';
import useStore, { SortOption } from '@/lib/store';
import { Search, Filter, Star, X, ArrowUpDown, Globe2 } from 'lucide-react';

export default function SearchHeader() {
  const searchQuery = useStore((state) => state.searchQuery);
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const filters = useStore((state) => state.filters);
  const setFilters = useStore((state) => state.setFilters);
  const resetFilters = useStore((state) => state.resetFilters);
  const savedCompanies = useStore((state) => state.savedCompanies);
  const savedCount = Object.keys(savedCompanies).length;

  const countries = [
    'All Countries',
    'United States',
    'United Kingdom',
    'France',
    'Germany',
    'India',
    'Israel',
    'Singapore',
    'Canada',
    'Sweden',
    'Australia',
    'Brazil',
    'Japan',
    'Switzerland',
    'Netherlands',
    'South Korea',
    'Mexico',
    'Nigeria',
    'United Arab Emirates',
    'Saudi Arabia',
    'Indonesia',
    'Vietnam',
  ];

  const industries = [
    'All Industries',
    'AI/ML',
    'Fintech',
    'Infrastructure',
    'CyberSecurity',
    'Enterprise SaaS',
    'Design & Productivity',
    'Robotics',
    'CleanTech',
    'HealthTech',
    'Developer Tools',
    'SpaceTech',
    'E-commerce',
  ];

  const stages = [
    'All Stages',
    'Seed',
    'Series A',
    'Series B',
    'Series C',
    'Series D',
    'Series E',
    'Series F',
    'Private',
    'Pre-IPO',
    'Public',
    'Bootstrapped',
  ];

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'valuation-desc', label: 'Valuation: High to Low' },
    { value: 'valuation-asc', label: 'Valuation: Low to High' },
    { value: 'funding-desc', label: 'Funding: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'year-desc', label: 'Founded: Newest First' },
  ];

  const hasActiveFilters = Boolean(
    filters.industry || filters.stage || filters.country || filters.sortBy || searchQuery
  );

  return (
    <header className="bg-white dark:bg-[#0c1220] border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 z-20 backdrop-blur-md bg-white/95 dark:bg-[#0c1220]/95 transition-colors duration-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500" size={19} />
          <input
            type="text"
            placeholder="Search 200+ startups by name, mission, sector, country, or technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3 bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-accent transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              title="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider pr-1">
            <Filter size={15} />
            <span>Filters</span>
          </div>

          {/* Country Filter */}
          <div className="relative">
            <select
              aria-label="Filter by country"
              value={filters.country || ''}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  country: e.target.value || undefined,
                })
              }
              className={`pl-8 pr-8 py-2 rounded-xl text-xs font-medium border appearance-none transition focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                filters.country
                  ? 'bg-blue-50/80 dark:bg-blue-950/60 border-blue-300 dark:border-blue-800 text-accent dark:text-blue-300'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {countries.map((c) => (
                <option key={c} value={c === 'All Countries' ? '' : c} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                  {c}
                </option>
              ))}
            </select>
            <Globe2 size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Industry Filter */}
          <select
            aria-label="Filter by industry"
            value={filters.industry || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                industry: e.target.value || undefined,
              })
            }
            className={`px-3 py-2 rounded-xl text-xs font-medium border transition focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
              filters.industry
                ? 'bg-blue-50/80 dark:bg-blue-950/60 border-blue-300 dark:border-blue-800 text-accent dark:text-blue-300'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {industries.map((ind) => (
              <option key={ind} value={ind === 'All Industries' ? '' : ind} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                {ind}
              </option>
            ))}
          </select>

          {/* Stage Filter */}
          <select
            aria-label="Filter by funding stage"
            value={filters.stage || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                stage: e.target.value || undefined,
              })
            }
            className={`px-3 py-2 rounded-xl text-xs font-medium border transition focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
              filters.stage
                ? 'bg-blue-50/80 dark:bg-blue-950/60 border-blue-300 dark:border-blue-800 text-accent dark:text-blue-300'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {stages.map((st) => (
              <option key={st} value={st === 'All Stages' ? '' : st} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                {st}
              </option>
            ))}
          </select>

          {/* Sort Selector */}
          <div className="relative">
            <select
              aria-label="Sort companies"
              value={filters.sortBy || 'valuation-desc'}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  sortBy: (e.target.value as SortOption) || undefined,
                })
              }
              className="pl-7 pr-4 py-2 rounded-xl text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                  {opt.label}
                </option>
              ))}
            </select>
            <ArrowUpDown size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={() => {
                resetFilters();
                setSearchQuery('');
              }}
              className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 px-2 py-1 transition flex items-center gap-1"
            >
              <X size={13} />
              Reset
            </button>
          )}

          <div className="flex-1" />

          {/* Saved Startups Quick Link */}
          <Link
            href="/saved"
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 font-medium text-xs shadow-xs transition"
          >
            <Star size={14} className={savedCount > 0 ? "fill-accent text-accent" : "text-slate-400 dark:text-slate-500"} />
            <span>Saved Startups</span>
            {savedCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-blue-300">
                {savedCount}
              </span>
            )}
          </Link>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-xs">
            <span className="text-slate-400 dark:text-slate-500 font-medium">Active:</span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
                &ldquo;{searchQuery}&rdquo;
                <button onClick={() => setSearchQuery('')} className="hover:text-blue-900 dark:hover:text-white">
                  <X size={12} />
                </button>
              </span>
            )}
            {filters.country && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
                {filters.country}
                <button onClick={() => setFilters({ ...filters, country: undefined })} className="hover:text-blue-900 dark:hover:text-white">
                  <X size={12} />
                </button>
              </span>
            )}
            {filters.industry && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
                {filters.industry}
                <button onClick={() => setFilters({ ...filters, industry: undefined })} className="hover:text-blue-900 dark:hover:text-white">
                  <X size={12} />
                </button>
              </span>
            )}
            {filters.stage && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
                {filters.stage}
                <button onClick={() => setFilters({ ...filters, stage: undefined })} className="hover:text-blue-900 dark:hover:text-white">
                  <X size={12} />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
