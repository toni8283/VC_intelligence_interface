'use client';

import Link from 'next/link';
import useStore, { Company } from '@/lib/store';
import { ArrowRight, Globe, TrendingUp, Star } from 'lucide-react';
import CompanyLogo from '@/components/CompanyLogo';

interface CompaniesTableProps {
  companies: Company[];
}

export default function CompaniesTable({ companies }: CompaniesTableProps) {
  const savedCompanies = useStore((state) => state.savedCompanies);
  const toggleSaveCompany = useStore((state) => state.toggleSaveCompany);

  if (companies.length === 0) {
    return (
      <div className="bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-16 text-center shadow-xs transition-colors duration-200">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-accent dark:text-blue-400 mx-auto flex items-center justify-center mb-3">
          <Globe size={22} />
        </div>
        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-1">
          No companies match your filters
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          Try expanding your country, stage, or industry parameters to explore the global startup registry.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs overflow-hidden transition-colors duration-200">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/40 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              <th className="py-3.5 pl-6 pr-4">Startup</th>
              <th className="py-3.5 px-4">Country & HQ</th>
              <th className="py-3.5 px-4">Industry</th>
              <th className="py-3.5 px-4">Stage</th>
              <th className="py-3.5 px-4">Valuation</th>
              <th className="py-3.5 px-4">Total Raised</th>
              <th className="py-3.5 pr-6 pl-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
            {companies.map((company) => {
              const isSaved = Boolean(savedCompanies[company.id]);
              return (
              <tr
                key={company.id}
                className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors duration-150"
              >
                {/* Startup Name & Description with Star button */}
                <td className="py-4 pl-6 pr-4">
                  <div className="flex items-center gap-3 max-w-md">
                    <button
                      type="button"
                      onClick={() => toggleSaveCompany(company.id)}
                      className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition flex-shrink-0"
                      title={isSaved ? 'Remove from saved' : 'Save / Star startup'}
                      aria-label={isSaved ? 'Remove from saved' : 'Save / Star startup'}
                    >
                      <Star
                        size={16}
                        className={`transition-all duration-150 ${
                          isSaved
                            ? 'fill-accent text-accent'
                            : 'text-slate-300 dark:text-slate-600 hover:text-accent'
                        }`}
                      />
                    </button>
                    <CompanyLogo
                      name={company.name}
                      website={company.website}
                      logo={company.logo}
                      size={40}
                    />
                    <div className="min-w-0">
                      <Link
                        href={`/companies/${company.id}`}
                        className="font-semibold text-slate-900 dark:text-white hover:text-accent dark:hover:text-blue-400 transition inline-flex items-center gap-1.5 truncate"
                      >
                        <span className="truncate">{company.name}</span>
                      </Link>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Country & HQ */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-[11px]">
                      {company.country}
                    </span>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                      {company.headquarters}
                    </p>
                  </div>
                </td>

                {/* Industry */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium bg-blue-50/70 dark:bg-blue-950/40 text-accent dark:text-blue-300 border border-blue-100/60 dark:border-blue-900/40">
                    {company.industry}
                  </span>
                </td>

                {/* Stage */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {company.stage}
                  </span>
                </td>

                {/* Valuation */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={13} className="text-slate-400 dark:text-slate-500 flex-shrink-0" />
                    <span className="font-bold text-slate-900 dark:text-white text-xs">
                      {company.currentValuation || 'Undisclosed'}
                    </span>
                  </div>
                  {company.valuationHistory && company.valuationHistory.length > 1 && (
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                      {(
                        company.valuationHistory[company.valuationHistory.length - 1].valuation /
                        company.valuationHistory[0].valuation
                      ).toFixed(0)}
                      x tracked
                    </span>
                  )}
                </td>

                {/* Total Raised */}
                <td className="py-4 px-4 whitespace-nowrap text-slate-600 dark:text-slate-300 font-medium">
                  {company.fundingRaised}
                </td>

                {/* Action Link */}
                <td className="py-4 pr-6 pl-2 text-right whitespace-nowrap">
                  <Link
                    href={`/companies/${company.id}`}
                    className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 group-hover:text-accent dark:group-hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    title={`View ${company.name} profile`}
                  >
                    <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
