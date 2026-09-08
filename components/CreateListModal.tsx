'use client';

import { useState } from 'react';
import useStore from '@/lib/store';
import { X } from 'lucide-react';

interface CreateListModalProps {
  onClose: () => void;
}

export default function CreateListModal({ onClose }: CreateListModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const createList = useStore((state) => state.createList);

  const handleCreate = () => {
    if (name.trim()) {
      createList(name, description);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-[#0c1220] rounded-2xl p-6 w-full max-w-md border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Create Target List</h3>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-3.5 mb-5">
          <div>
            <label className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
              List Name *
            </label>
            <input
              type="text"
              placeholder="e.g. European AI Foundation Models"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-accent"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
              Investment Thesis / Description (Optional)
            </label>
            <textarea
              placeholder="Notes on why this list was compiled, key metrics to evaluate..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-accent resize-none h-20"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium transition"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={!name.trim()}
            className="flex-1 px-4 py-2 rounded-xl bg-accent text-white hover:bg-blue-700 disabled:opacity-50 text-xs font-medium shadow-xs transition"
          >
            Create List
          </button>
        </div>
      </div>
    </div>
  );
}
