'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import useStore from '@/lib/store';
import { mockCompanies } from '@/lib/mockData';
import CompanyLogo from '@/components/CompanyLogo';
import {
  Star,
  Search,
  Download,
  FileText,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Sparkles,
  Edit3,
  Check,
  X,
  ExternalLink,
} from 'lucide-react';

export default function SavedCompaniesPage() {
  const savedCompanies = useStore((state) => state.savedCompanies);
  const toggleSaveCompany = useStore((state) => state.toggleSaveCompany);
  const saveCompanyNotes = useStore((state) => state.saveCompanyNotes);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'with-notes' | 'without-notes'>('all');
  const [editingCompanyId, setEditingCompanyId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  // Map saved company entries to their full mockCompany records
  const savedList = useMemo(() => {
    const list = Object.values(savedCompanies).map((item) => {
      const company = mockCompanies.find((c) => c.id === item.companyId);
      return {
        ...item,
        company,
      };
    }).filter((item) => Boolean(item.company));

    // Sort by most recently saved
    return list.sort((a, b) => b.savedAt - a.savedAt);
  }, [savedCompanies]);

  // Filter based on user query and notes filter
  const filteredList = useMemo(() => {
    return savedList.filter((item) => {
      if (!item.company) return false;

      // Note presence filter
      const hasNotes = Boolean(item.notes && item.notes.trim().length > 0);
      if (filterMode === 'with-notes' && !hasNotes) return false;
      if (filterMode === 'without-notes' && hasNotes) return false;

      // Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.company.name.toLowerCase().includes(q);
        const matchesCountry = item.company.country.toLowerCase().includes(q);
        const matchesIndustry = item.company.industry.toLowerCase().includes(q);
        const matchesNotes = Boolean(item.notes && item.notes.toLowerCase().includes(q));
        return matchesName || matchesCountry || matchesIndustry || matchesNotes;
      }

      return true;
    });
  }, [savedList, searchQuery, filterMode]);

  const handleStartEdit = (companyId: string, currentNotes: string = '') => {
    setEditingCompanyId(companyId);
    setEditingText(currentNotes);
  };

  const handleSaveNote = (companyId: string) => {
    saveCompanyNotes(companyId, editingText);
    setEditingCompanyId(null);
  };

  // Export saved companies to CSV
  const handleExportCSV = () => {
    const headers = [
      'Startup Name',
      'Country',
      'Headquarters',
      'Industry',
      'Stage',
      'Valuation',
      'Total Raised',
      'Diligence Notes',
      'Website',
    ];
    const rows = filteredList.map(({ company, notes }) => [
      company?.name || '',
      company?.country || '',
      company?.headquarters || '',
      company?.industry || '',
      company?.stage || '',
      company?.currentValuation || '',
      company?.fundingRaised || '',
      notes || '',
      company?.website || '',
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `saved_startups_portfolio_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const countWithNotes = savedList.filter((item) => Boolean(item.notes && item.notes.trim().length > 0)).length;

  return (
    <div className="min-h-screen bg-slate-50/70 dark:bg-[#080d1a] transition-colors duration-200">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7">
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Saved Startups & Notes
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Star size={12} className="fill-accent text-accent" />
                {savedList.length} Starred
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Personal investment pipeline: track starred companies and custom diligence thesis notes
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            {savedList.length > 0 && (
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-750 bg-white dark:bg-[#0c1220] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-medium shadow-xs transition"
              >
                <Download size={14} className="text-slate-400" />
                Export Portfolio CSV
              </button>
            )}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-white hover:bg-blue-700 text-xs font-medium shadow-xs transition"
            >
              Browse Directory
            </Link>
          </div>
        </div>

        {/* Quick Stats Banner */}
        {savedList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center flex-shrink-0">
                <Star size={16} className="fill-accent text-accent" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Total Starred</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">{savedList.length} Startups</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center flex-shrink-0">
                <FileText size={16} className="text-slate-600 dark:text-slate-300" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">With Diligence Notes</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">{countWithNotes} Startups</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center flex-shrink-0">
                <Sparkles size={16} className="text-slate-600 dark:text-slate-300" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Auto-Sync</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Synchronized</p>
              </div>
            </div>
          </div>
        )}

        {/* Filter Bar */}
        {savedList.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search your saved startups or notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-accent"
              />
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/80 rounded-xl text-xs">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  filterMode === 'all'
                    ? 'bg-white dark:bg-[#0c1220] text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All ({savedList.length})
              </button>
              <button
                onClick={() => setFilterMode('with-notes')}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  filterMode === 'with-notes'
                    ? 'bg-white dark:bg-[#0c1220] text-accent dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Notes ({countWithNotes})
              </button>
              <button
                onClick={() => setFilterMode('without-notes')}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  filterMode === 'without-notes'
                    ? 'bg-white dark:bg-[#0c1220] text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                No Notes ({savedList.length - countWithNotes})
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {savedList.length === 0 ? (
          <div className="bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-16 text-center shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 mx-auto flex items-center justify-center mb-4">
              <Star size={20} className="text-slate-400 dark:text-slate-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
              No saved startups yet
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
              Star any startup by clicking the star icon in the directory, or write diligence notes on a company profile to automatically track it in this portfolio.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white hover:bg-blue-700 font-semibold text-xs shadow-sm transition"
            >
              Explore 200+ Startups
              <ArrowRight size={15} />
            </Link>
          </div>
        ) : filteredList.length === 0 ? (
          <div className="bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-12 text-center text-xs text-slate-500 dark:text-slate-400 shadow-xs">
            No saved startups match &ldquo;{searchQuery}&rdquo; in this filter.
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 gap-4">
            {filteredList.map(({ company, notes, savedAt }) => {
              if (!company) return null;
              const isEditing = editingCompanyId === company.id;

              return (
                <div
                  key={company.id}
                  className="bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-5 md:p-6 shadow-xs hover:border-blue-300 dark:hover:border-blue-800/80 transition space-y-4"
                >
                  {/* Top Company Info Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Star Button */}
                      <button
                        type="button"
                        onClick={() => toggleSaveCompany(company.id)}
                        className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition flex-shrink-0"
                        title="Remove from saved"
                      >
                        <Star size={18} className="fill-accent text-accent" />
                      </button>

                      <CompanyLogo
                        name={company.name}
                        website={company.website}
                        logo={company.logo}
                        size={44}
                      />

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Link
                            href={`/companies/${company.id}`}
                            className="text-base font-bold text-slate-900 dark:text-white hover:text-accent dark:hover:text-blue-400 transition"
                          >
                            {company.name}
                          </Link>
                          <span className="inline-flex px-2 py-0.5 rounded-md text-[11px] font-medium bg-blue-50 dark:bg-blue-950/50 text-accent dark:text-blue-300">
                            {company.industry}
                          </span>
                          <span className="inline-flex px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {company.stage}
                          </span>
                          <span className="inline-flex px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {company.country}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 dark:text-slate-400">
                          <span className="line-clamp-1 flex-1">{company.description}</span>
                          {savedAt && (
                            <span className="hidden md:inline-block text-[11px] text-slate-400 dark:text-slate-500 flex-shrink-0">
                              • Saved {new Date(savedAt).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Metrics & Profile Link */}
                    <div className="flex items-center gap-4 sm:gap-6 self-start sm:self-center pl-11 sm:pl-0">
                      <div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                          <TrendingUp size={12} className="text-slate-400 dark:text-slate-500" />
                          Valuation
                        </div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          {company.currentValuation || '—'}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                          <DollarSign size={12} className="text-slate-400 dark:text-slate-500" />
                          Raised
                        </div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          {company.fundingRaised}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                          title="Visit website"
                        >
                          <ExternalLink size={15} />
                        </a>
                        <Link
                          href={`/companies/${company.id}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/60 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-blue-300 text-xs font-semibold transition"
                        >
                          Profile
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Notes Container */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    {isEditing ? (
                      /* Inline Notes Editor */
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <FileText size={14} className="text-accent" />
                            Editing Diligence Notes for {company.name}
                          </span>
                          <button
                            onClick={() => setEditingCompanyId(null)}
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <textarea
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                          placeholder="Type internal investment thesis, meeting remarks, key milestones to track..."
                          className="w-full h-24 p-3 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-accent resize-none"
                          autoFocus
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setEditingCompanyId(null)}
                            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-750 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSaveNote(company.id)}
                            className="px-3.5 py-1.5 rounded-lg bg-accent text-white hover:bg-blue-700 text-xs font-medium flex items-center gap-1.5 shadow-xs"
                          >
                            <Check size={13} />
                            Save Notes
                          </button>
                        </div>
                      </div>
                    ) : notes && notes.trim().length > 0 ? (
                      /* Display Saved Notes */
                      <div className="bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-xl p-3.5 flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <FileText size={15} className="text-slate-400 dark:text-slate-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                              Diligence Notes
                            </p>
                            <p className="text-xs text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
                              {notes}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleStartEdit(company.id, notes)}
                          className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-750 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition flex-shrink-0 text-xs flex items-center gap-1 font-medium"
                          title="Edit note"
                        >
                          <Edit3 size={13} />
                          <span>Edit</span>
                        </button>
                      </div>
                    ) : (
                      /* Quick Add Note prompt */
                      <button
                        onClick={() => handleStartEdit(company.id, '')}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 hover:text-accent dark:hover:text-blue-400 font-medium transition py-1"
                      >
                        <Edit3 size={13} />
                        <span>+ Add Diligence Notes for {company.name}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
