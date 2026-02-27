'use client';

import { useRouter } from 'next/navigation';
import useStore from '@/lib/store';
import { Play, Trash2 } from 'lucide-react';

export default function SavedPage() {
  const router = useRouter();
  const savedSearches = useStore((state) => state.savedSearches);
  const loadSearch = useStore((state) => state.loadSearch);
  const deleteSavedSearch = useStore((state) => state.deleteSavedSearch);

  const handleLoad = (searchId: string) => {
    loadSearch(searchId);
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Saved Searches</h1>
          <p className="text-slate-500">
            {savedSearches.length} search{savedSearches.length !== 1 ? 'es' : ''} saved
          </p>
        </div>

        {savedSearches.length === 0 ? (
          <div className="bg-white rounded-lg border border-slate-200 p-12 text-center mt-8">
            <p className="text-slate-500 mb-4">
              No saved searches yet. Create and save a search on the Companies page.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {savedSearches.map((search) => (
              <div
                key={search.id}
                className="bg-white rounded-lg border border-slate-200 p-6 flex justify-between items-start"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {search.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">
                    Query: <span className="font-medium">{search.query || '(empty)'}</span>
                  </p>
                  <div className="flex gap-4 text-sm">
                    {search.filters.industry && (
                      <span className="text-slate-600">
                        Industry: <span className="font-medium">{search.filters.industry}</span>
                      </span>
                    )}
                    {search.filters.stage && (
                      <span className="text-slate-600">
                        Stage: <span className="font-medium">{search.filters.stage}</span>
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-xs mt-3">
                    Created {new Date(search.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleLoad(search.id)}
                    className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-blue-700 font-medium flex items-center gap-2"
                  >
                    <Play size={16} />
                    Load
                  </button>
                  <button
                    onClick={() => deleteSavedSearch(search.id)}
                    className="px-3 py-2 rounded-lg border border-red-300 text-red-700 hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
