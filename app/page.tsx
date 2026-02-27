'use client';

import { useState, useMemo, useEffect } from 'react';
import useStore, { Company } from '@/lib/store';
import { mockCompanies } from '@/lib/mockData';
import CompaniesTable from '@/components/CompaniesTable';
import SearchHeader from '@/components/SearchHeader';

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const searchQuery = useStore((state) => state.searchQuery);
  const filters = useStore((state) => state.filters);

  useEffect(() => {
    setCompanies(mockCompanies);
  }, []);

  const filtered = useMemo(() => {
    let result = companies;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.industry.toLowerCase().includes(query)
      );
    }

    if (filters.industry) {
      result = result.filter((c) => c.industry === filters.industry);
    }

    if (filters.stage) {
      result = result.filter((c) => c.stage === filters.stage);
    }

    return result;
  }, [companies, searchQuery, filters]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedCompanies = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <SearchHeader />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Companies</h2>
          <p className="text-slate-500">
            {filtered.length} companies found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        <CompaniesTable companies={paginatedCompanies} />

        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-slate-600 text-sm">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
