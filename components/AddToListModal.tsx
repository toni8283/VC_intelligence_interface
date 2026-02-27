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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Save to List</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-lg transition"
          >
            <X size={20} className="text-slate-400" />
          </button>
        </div>

        {lists.length === 0 ? (
          <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
            <p className="text-sm text-slate-700">
              No lists yet. Create one to save this company.
            </p>
          </div>
        ) : (
          <div className="space-y-2 mb-6 max-h-48 overflow-y-auto">
            {lists.map((list) => (
              <button
                key={list.id}
                onClick={() => onAdd(list.id)}
                className="w-full text-left p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition"
              >
                <p className="font-medium text-slate-900">{list.name}</p>
                {list.description && (
                  <p className="text-xs text-slate-500 mt-1">{list.description}</p>
                )}
              </button>
            ))}
          </div>
        )}

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-600 mb-3">Or create a new list</p>
          <input
            type="text"
            placeholder="e.g., AI Startups"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg mb-3 focus:outline-none focus:border-accent"
          />
          <button
            onClick={handleCreateAndAdd}
            disabled={!newListName.trim()}
            className="w-full px-4 py-2 rounded-lg bg-accent text-white hover:bg-blue-700 disabled:opacity-50 font-medium flex items-center justify-center gap-2"
          >
            <Plus size={16} />
            Create & Save
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-3 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
