'use client';

import { useState, useMemo, useEffect } from 'react';
import useStore, { Company } from '@/lib/store';
import { mockCompanies } from '@/lib/mockData';
import CompaniesTable from '@/components/CompaniesTable';
import SearchHeader from '@/components/SearchHeader';
import {
  TrendingUp,
  Building2,
  Globe2,
  Layers,
  Download,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const searchQuery = useStore((state) => state.searchQuery);
  const filters = useStore((state) => state.filters);

  useEffect(() => {
    setCompanies(mockCompanies);
  }, []);

  // Filter & Sort Logic
  const filtered = useMemo(() => {
    let result = [...companies];

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.industry.toLowerCase().includes(query) ||
          c.country.toLowerCase().includes(query) ||
          c.headquarters.toLowerCase().includes(query)
      );
    }

    // Country filter
    if (filters.country) {
      result = result.filter(
        (c) => c.country.toLowerCase() === filters.country!.toLowerCase()
      );
    }

    // Industry filter
    if (filters.industry) {
      result = result.filter(
        (c) => c.industry.toLowerCase() === filters.industry!.toLowerCase()
      );
    }

    // Stage filter
    if (filters.stage) {
      result = result.filter(
        (c) => c.stage.toLowerCase() === filters.stage!.toLowerCase()
      );
    }

    // Sort order
    const sort = filters.sortBy || 'valuation-desc';
    result.sort((a, b) => {
      if (sort === 'valuation-desc') {
        return (b.valuationNum || 0) - (a.valuationNum || 0);
      }
      if (sort === 'valuation-asc') {
        return (a.valuationNum || 0) - (b.valuationNum || 0);
      }
      if (sort === 'funding-desc') {
        return (b.fundingNum || 0) - (a.fundingNum || 0);
      }
      if (sort === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sort === 'year-desc') {
        return (b.foundedYear || 0) - (a.foundedYear || 0);
      }
      return 0;
    });

    return result;
  }, [companies, searchQuery, filters]);

  // Reset page to 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [searchQuery, filters, pageSize]);

  // Pagination calculation
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginatedCompanies = useMemo(() => {
    return filtered.slice((page - 1) * pageSize, page * pageSize);
  }, [filtered, page, pageSize]);

  // Total Market Valuation Calculation
  const totalValuationBillions = useMemo(() => {
    const totalM = filtered.reduce((acc, c) => acc + (c.valuationNum || 0), 0);
    if (totalM >= 1000) {
      return `$${(totalM / 1000).toFixed(1)}T`;
    }
    return `$${totalM}B`;
  }, [filtered]);

  // Distinct countries count
  const countriesCount = useMemo(() => {
    return new Set(filtered.map((c) => c.country)).size;
  }, [filtered]);

  // Export filtered companies to CSV
  const handleExportCSV = () => {
    const headers = [
      'Name',
      'Country',
      'Headquarters',
      'Industry',
      'Stage',
      'Valuation',
      'Funding Raised',
      'Founded Year',
      'Website',
    ];
    const rows = filtered.map((c) => [
      c.name,
      c.country,
      c.headquarters,
      c.industry,
      c.stage,
      c.currentValuation || '',
      c.fundingRaised,
      c.foundedYear,
      c.website,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `tb_scout_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 dark:bg-[#080d1a] transition-colors duration-200">
      <SearchHeader />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7">
        {/* KPI Intelligence Header Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1.5">
              <Building2 size={16} className="text-slate-400 dark:text-slate-500" />
              <span>Matched Startups</span>
            </div>
            <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {filtered.length}
              <span className="text-xs text-slate-400 font-normal ml-1.5">
                of {companies.length} tracked
              </span>
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1.5">
              <TrendingUp size={16} className="text-slate-400 dark:text-slate-500" />
              <span>Total Tracked Valuation</span>
            </div>
            <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {totalValuationBillions}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1.5">
              <Globe2 size={16} className="text-slate-400 dark:text-slate-500" />
              <span>Countries Represented</span>
            </div>
            <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {countriesCount}
              <span className="text-xs text-slate-400 font-normal ml-1.5">nations</span>
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1.5">
              <Layers size={16} className="text-slate-400 dark:text-slate-500" />
              <span>Avg. Rounds Logged</span>
            </div>
            <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              3.8
              <span className="text-xs text-slate-400 font-normal ml-1.5">milestones / co</span>
            </p>
          </div>
        </div>

        {/* Section Header & Export */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Global Startup Intelligence
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Showing {Math.min(filtered.length, (page - 1) * pageSize + 1)}-
              {Math.min(filtered.length, page * pageSize)} of {filtered.length} matching startups
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Page Size Selector */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <span>Show:</span>
              <select
                aria-label="Items per page"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2 py-1 text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-accent"
              >
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            {/* CSV Export */}
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-medium shadow-xs transition"
            >
              <Download size={14} className="text-slate-400" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Startups Table */}
        <CompaniesTable companies={paginatedCompanies} />

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Page <span className="font-semibold text-slate-900 dark:text-white">{page}</span> of{' '}
              <span className="font-semibold text-slate-900 dark:text-white">{totalPages}</span>
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-xs"
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Page numbers preview */}
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pNum = i + 1;
                  if (totalPages > 5 && page > 3) {
                    pNum = Math.min(totalPages, page - 2 + i);
                  }
                  return (
                    <button
                      key={pNum}
                      onClick={() => setPage(pNum)}
                      className={`w-8 h-8 rounded-xl text-xs font-medium transition ${
                        page === pNum
                          ? 'bg-accent text-white shadow-xs'
                          : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {pNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-xs"
                aria-label="Next page"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
