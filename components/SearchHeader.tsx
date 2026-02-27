'use client';

import { useState } from 'react';
import useStore from '@/lib/store';
import { Search, Filter, Save } from 'lucide-react';

export default function SearchHeader() {
  const [showSaveSearch, setShowSaveSearch] = useState(false);
  const [searchName, setSearchName] = useState('');

  const searchQuery = useStore((state) => state.searchQuery);
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const filters = useStore((state) => state.filters);
  const setFilters = useStore((state) => state.setFilters);
  const resetFilters = useStore((state) => state.resetFilters);
  const saveCurrent = useStore((state) => state.saveCurrent);

  const handleSaveSearch = () => {
    if (searchName.trim()) {
      saveCurrent(searchName);
      setSearchName('');
      setShowSaveSearch(false);
    }
  };

  const industries = [
    'All',
    'Infrastructure',
    'AI/ML',
    'Fintech',
    'Robotics/AI',
    'Design/Productivity',
    'Data/AI',
    'Productivity',
  ];

  const stages = [
    'All',
    'Series A',
    'Series B',
    'Series C',
    'Series D',
    'Private',
  ];

  return (
    <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search companies by name, description, or industry..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center">
          <Filter size={18} className="text-slate-400" />

          <select
            value={filters.industry || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                industry: e.target.value || undefined,
              })
            }
            className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-accent"
          >
            {industries.map((ind) => (
              <option key={ind} value={ind === 'All' ? '' : ind}>
                {ind === 'All' ? 'All Industries' : ind}
              </option>
            ))}
          </select>

          <select
            value={filters.stage || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                stage: e.target.value || undefined,
              })
            }
            className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-accent"
          >
            {stages.map((stage) => (
              <option key={stage} value={stage === 'All' ? '' : stage}>
                {stage === 'All' ? 'All Stages' : stage}
              </option>
            ))}
          </select>

          {(filters.industry || filters.stage) && (
            <button
              onClick={() => resetFilters()}
              className="text-sm text-slate-500 hover:text-slate-700 font-medium"
            >
              Clear filters
            </button>
          )}

          <div className="flex-1" />

          <button
            onClick={() => setShowSaveSearch(true)}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center gap-2 font-medium text-sm"
          >
            <Save size={16} />
            Save Search
          </button>
        </div>
      </div>

      {/* Save Search Modal */}
      {showSaveSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Save Search</h3>
            <input
              type="text"
              placeholder="e.g., AI Startups Series B"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:border-accent"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowSaveSearch(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveSearch}
                disabled={!searchName.trim()}
                className="flex-1 px-4 py-2 rounded-lg bg-accent text-white hover:bg-blue-700 disabled:opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
