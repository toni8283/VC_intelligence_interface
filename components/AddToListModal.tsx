'use client';

import { useState } from 'react';
import useStore from '@/lib/store';
import { X, Plus } from 'lucide-react';

interface AddToListModalProps {
  onClose: () => void;
  onAdd: (listId: string) => void;
}

export default function AddToListModal({
  onClose,
  onAdd,
}: AddToListModalProps) {
  const [newListName, setNewListName] = useState('');
  const lists = useStore((state) => state.lists);
  const createList = useStore((state) => state.createList);

  const handleCreateAndAdd = () => {
    if (newListName.trim()) {
      const newListId = createList(newListName);
      onAdd(newListId);
      setNewListName('');
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-[#0c1220] rounded-2xl p-6 w-full max-w-md border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Save to List</h3>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        {lists.length === 0 ? (
          <div className="mb-5 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/50">
            <p className="text-xs text-slate-600 dark:text-slate-300">
              No lists yet. Create one below to organize your target portfolio companies.
            </p>
          </div>
        ) : (
          <div className="space-y-2 mb-5 max-h-48 overflow-y-auto pr-1">
            {lists.map((list) => (
              <button
                key={list.id}
                onClick={() => onAdd(list.id)}
                className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition"
              >
                <p className="font-semibold text-xs text-slate-900 dark:text-white">{list.name}</p>
                {list.description && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">{list.description}</p>
                )}
              </button>
            ))}
          </div>
        )}

        <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">Or create new list</p>
          <input
            type="text"
            placeholder="e.g. Series B Robotics Pipeline"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            className="w-full px-3.5 py-2 text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl mb-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-accent"
          />
          <button
            onClick={handleCreateAndAdd}
            disabled={!newListName.trim()}
            className="w-full px-4 py-2 rounded-xl bg-accent text-white hover:bg-blue-700 disabled:opacity-50 font-medium text-xs flex items-center justify-center gap-2 shadow-xs transition"
          >
            <Plus size={15} />
            Create & Add Startup
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-3 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
