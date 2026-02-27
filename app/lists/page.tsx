'use client';

import { useState } from 'react';
import useStore from '@/lib/store';
import { mockCompanies } from '@/lib/mockData';
import { Plus, Trash2, Download } from 'lucide-react';
import CreateListModal from '@/components/CreateListModal';

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
      ['Company', 'Stage', 'Industry', 'Funding', 'Website'],
      ...companies.map((c) => [
        c.name,
        c.stage,
        c.industry,
        c.fundingRaised,
        c.website,
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${list.name}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 mb-2">Lists</h1>
            <p className="text-slate-500">
              {lists.length} list{lists.length !== 1 ? 's' : ''} created
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-blue-700 font-medium flex items-center gap-2"
          >
            <Plus size={18} />
            New List
          </button>
        </div>

        {lists.length === 0 ? (
          <div className="bg-white rounded-lg border border-slate-200 p-12 text-center">
            <p className="text-slate-500 mb-4">No lists yet. Create one to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {lists.map((list) => {
              const companies = getListCompanies(list.id);
              return (
                <div
                  key={list.id}
                  className="bg-white rounded-lg border border-slate-200 p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">
                        {list.name}
                      </h3>
                      {list.description && (
                        <p className="text-slate-500 text-sm">{list.description}</p>
                      )}
                      <p className="text-slate-400 text-sm mt-2">
                        {companies.length} company{companies.length !== 1 ? 'ies' : ''}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleExport(list.id)}
                        className="px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                      >
                        <Download size={16} />
                        Export
                      </button>
                      <button
                        onClick={() => deleteList(list.id)}
                        className="px-3 py-2 rounded-lg border border-red-300 text-red-700 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {companies.length > 0 && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-t border-slate-200">
                            <th className="px-4 py-3 text-left text-slate-700 font-semibold">
                              Company
                            </th>
                            <th className="px-4 py-3 text-left text-slate-700 font-semibold">
                              Industry
                            </th>
                            <th className="px-4 py-3 text-left text-slate-700 font-semibold">
                              Stage
                            </th>
                            <th className="px-4 py-3 text-left text-slate-700 font-semibold">
                              Funding
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {companies.map((company) => (
                            <tr
                              key={company.id}
                              className="border-t border-slate-100 hover:bg-slate-50"
                            >
                              <td className="px-4 py-3 text-slate-900 font-medium">
                                {company.name}
                              </td>
                              <td className="px-4 py-3 text-slate-600">
                                {company.industry}
                              </td>
                              <td className="px-4 py-3 text-slate-600">
                                {company.stage}
                              </td>
                              <td className="px-4 py-3 text-slate-600">
                                {company.fundingRaised}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
