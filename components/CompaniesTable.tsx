'use client';

import Link from 'next/link';
import { Company } from '@/lib/store';
import { ArrowRight } from 'lucide-react';

interface CompaniesTableProps {
  companies: Company[];
}

export default function CompaniesTable({ companies }: CompaniesTableProps) {
  if (companies.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-slate-200 p-12 text-center">
        <p className="text-slate-500">No companies found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Company
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Industry
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Stage
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Funding
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              HQ
            </th>
            <th className="px-6 py-4 text-right" />
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr
              key={company.id}
              className="border-b border-slate-100 hover:bg-slate-50 transition"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  {company.logo && (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-10 h-10 rounded-lg object-cover bg-slate-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  <div>
                    <p className="font-semibold text-slate-900">{company.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {company.description}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-slate-600">{company.industry}</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                  {company.stage}
                </span>
              </td>
              <td className="px-6 py-4 text-slate-600 text-sm font-medium">
                {company.fundingRaised}
              </td>
              <td className="px-6 py-4 text-slate-600 text-sm">
                {company.headquarters}
              </td>
              <td className="px-6 py-4 text-right">
                <Link href={`/companies/${company.id}`}>
                  <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-accent transition">
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
