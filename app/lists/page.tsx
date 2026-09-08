'use client';

import { useState } from 'react';
import useStore from '@/lib/store';
import { mockCompanies } from '@/lib/mockData';
import { Plus, Trash2, Download, ListOrdered, ArrowRight } from 'lucide-react';
import CreateListModal from '@/components/CreateListModal';
import CompanyLogo from '@/components/CompanyLogo';
import Link from 'next/link';

export default function ListsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const lists = useStore((state) => state.lists);
  const deleteList = useStore((state) => state.deleteList);

  const getListCompanies = (listId: string) => {
    const list = lists.find((l) => l.id === listId);
    if (!list) return [];
    return mockCompanies.filter((c) => list.companyIds.includes(c.id));
  };

  const handleExport = (listId: string) => {
    const list = lists.find((l) => l.id === listId);
    if (!list) return;

    const companies = getListCompanies(listId);
    const csv = [
      ['Company', 'Country', 'Stage', 'Industry', 'Valuation', 'Funding', 'Website'],
      ...companies.map((c) => [
        c.name,
        c.country,
        c.stage,
        c.industry,
        c.currentValuation || '',
        c.fundingRaised,
        c.website,
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${list.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 dark:bg-[#080d1a] transition-colors duration-200">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Target Lists & Shortlists
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Curate, evaluate, and export custom investment cohorts across global sectors
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2.5 rounded-xl bg-accent text-white hover:bg-blue-700 font-medium text-xs flex items-center gap-2 shadow-xs transition self-start sm:self-auto"
          >
            <Plus size={16} />
            Create Target List
          </button>
        </div>

        {lists.length === 0 ? (
          <div className="bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-16 text-center shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-accent dark:text-blue-400 mx-auto flex items-center justify-center mb-3">
              <ListOrdered size={22} />
            </div>
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
              No target lists yet
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-5">
              Create custom lists to group startups by vertical, geographic cluster, or pipeline diligence stage.
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 rounded-xl bg-accent text-white hover:bg-blue-700 text-xs font-medium shadow-xs transition"
            >
              New List
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {lists.map((list) => {
              const companies = getListCompanies(list.id);
              return (
                <div
                  key={list.id}
                  className="bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {list.name}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-blue-300">
                          {companies.length} {companies.length === 1 ? 'Startup' : 'Startups'}
                        </span>
                      </div>
                      {list.description && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {list.description}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleExport(list.id)}
                        disabled={companies.length === 0}
                        className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 text-xs font-medium flex items-center gap-1.5 shadow-xs transition"
                      >
                        <Download size={13} />
                        Export CSV
                      </button>
                      <button
                        onClick={() => deleteList(list.id)}
                        className="p-1.5 rounded-xl border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 text-xs transition"
                        title="Delete list"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  {companies.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                            <th className="py-2.5 px-3">Company</th>
                            <th className="py-2.5 px-3">Country</th>
                            <th className="py-2.5 px-3">Industry</th>
                            <th className="py-2.5 px-3">Stage</th>
                            <th className="py-2.5 px-3">Valuation</th>
                            <th className="py-2.5 px-3">Funding</th>
                            <th className="py-2.5 pr-3 text-right">View</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                          {companies.map((company) => (
                            <tr
                              key={company.id}
                              className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors"
                            >
                              <td className="py-3 px-3">
                                <div className="flex items-center gap-2.5">
                                  <CompanyLogo
                                    name={company.name}
                                    website={company.website}
                                    logo={company.logo}
                                    size={30}
                                  />
                                  <Link
                                    href={`/companies/${company.id}`}
                                    className="font-semibold text-slate-900 dark:text-white hover:text-accent dark:hover:text-blue-400 transition"
                                  >
                                    {company.name}
                                  </Link>
                                </div>
                              </td>
                              <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                                {company.country}
                              </td>
                              <td className="py-3 px-3">
                                <span className="inline-flex px-2 py-0.5 rounded text-[11px] bg-blue-50 dark:bg-blue-950/50 text-accent dark:text-blue-300">
                                  {company.industry}
                                </span>
                              </td>
                              <td className="py-3 px-3">
                                <span className="inline-flex px-2 py-0.5 rounded-full text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                  {company.stage}
                                </span>
                              </td>
                              <td className="py-3 px-3 font-semibold text-slate-900 dark:text-white">
                                {company.currentValuation || '—'}
                              </td>
                              <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                                {company.fundingRaised}
                              </td>
                              <td className="py-3 pr-3 text-right">
                                <Link
                                  href={`/companies/${company.id}`}
                                  className="inline-flex p-1 rounded-lg text-slate-400 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                                >
                                  <ArrowRight size={15} />
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="py-6 text-center text-xs text-slate-400 dark:text-slate-500 bg-slate-50/50 dark:bg-slate-900/30 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                      No companies added yet. Save startups directly from the Companies directory.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {showCreateModal && (
        <CreateListModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}
