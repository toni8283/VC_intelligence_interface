'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useStore, { Company } from '@/lib/store';
import { mockCompanies } from '@/lib/mockData';
import {
  ArrowLeft,
  Loader,
  Save,
  ExternalLink,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  DollarSign,
  Layers,
  Star,
} from 'lucide-react';
import CompanyLogo from '@/components/CompanyLogo';
import ValuationGrowthChart from '@/components/ValuationGrowthChart';
import EnrichmentPanel from '@/components/EnrichmentPanel';
import AddToListModal from '@/components/AddToListModal';

export default function CompanyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [enriching, setEnriching] = useState(false);
  const [showAddToList, setShowAddToList] = useState(false);
  const [notes, setNotes] = useState('');
  const [savedNotesMessage, setSavedNotesMessage] = useState(false);

  const enrichedData = useStore((state) => state.enrichedData[params.id]);
  const setEnrichedData = useStore((state) => state.setEnrichedData);
  const lists = useStore((state) => state.lists);
  const addToList = useStore((state) => state.addToList);
  const savedCompanies = useStore((state) => state.savedCompanies);
  const toggleSaveCompany = useStore((state) => state.toggleSaveCompany);
  const saveCompanyNotes = useStore((state) => state.saveCompanyNotes);

  const isStarred = Boolean(company && savedCompanies[company.id]);

  useEffect(() => {
    const found = mockCompanies.find((c) => c.id === params.id);
    if (!found) {
      router.push('/');
      return;
    }
    setCompany(found);
    setLoading(false);

    // Load saved notes from store or local storage
    const storeNote = useStore.getState().savedCompanies[params.id]?.notes;
    const localNote = localStorage.getItem(`vc-notes-${params.id}`);
    if (storeNote) {
      setNotes(storeNote);
    } else if (localNote) {
      setNotes(localNote);
    }
  }, [params.id, router]);

  const handleSaveNotes = () => {
    if (!company) return;
    localStorage.setItem(`vc-notes-${params.id}`, notes);
    saveCompanyNotes(company.id, notes);
    setSavedNotesMessage(true);
    setTimeout(() => setSavedNotesMessage(false), 3000);
  };

  const handleEnrich = async () => {
    if (!company) return;

    setEnriching(true);
    setEnrichedData(params.id, { loading: true });

    try {
      const response = await fetch('/api/enrich', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ website: company.website, companyName: company.name }),
      });

      if (!response.ok) {
        throw new Error('Enrichment failed');
      }

      const data = await response.json();
      setEnrichedData(params.id, {
        summary: data.summary,
        whatTheyDo: data.whatTheyDo,
        keywords: data.keywords,
        signals: data.signals,
        sources: data.sources,
        loading: false,
      });
    } catch {
      setEnrichedData(params.id, {
        error: 'Live enrichment query could not be completed at this time.',
        loading: false,
      });
    } finally {
      setEnriching(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50 dark:bg-[#080d1a]">
        <Loader className="animate-spin text-accent" size={36} />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="p-12 text-center text-slate-500 dark:text-slate-400">
        Company profile not found
      </div>
    );
  }

  const isInList = lists.some((list) => list.companyIds.includes(company.id));

  return (
    <div className="min-h-screen bg-slate-50/70 dark:bg-[#080d1a] transition-colors duration-200">
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#0c1220] border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 z-10 backdrop-blur-md bg-white/95 dark:bg-[#0c1220]/95">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-4 transition"
          >
            <ArrowLeft size={16} className="mr-1.5" />
            Back to Directory
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <CompanyLogo
                name={company.name}
                website={company.website}
                logo={company.logo}
                size={58}
              />
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {company.name}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60">
                    {company.industry}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {company.stage}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
                  {company.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {/* 1-Click Star / Save Button */}
              <button
                type="button"
                onClick={() => company && toggleSaveCompany(company.id, notes)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition shadow-xs border ${
                  isStarred
                    ? 'bg-blue-50/80 dark:bg-blue-950/50 text-accent dark:text-blue-300 border-blue-200 dark:border-blue-900/60'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Star
                  size={14}
                  className={isStarred ? 'fill-accent text-accent' : 'text-slate-400 dark:text-slate-500'}
                />
                <span>{isStarred ? 'Saved (Starred)' : 'Star Startup'}</span>
              </button>

              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-750 font-medium text-xs shadow-xs transition"
              >
                <span>Visit Website</span>
                <ExternalLink size={13} className="text-slate-400 dark:text-slate-500" />
              </a>

              <button
                onClick={() => setShowAddToList(true)}
                className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition shadow-xs ${
                  isInList
                    ? 'bg-blue-50 dark:bg-blue-950/70 text-accent dark:text-blue-300 border border-blue-200 dark:border-blue-900'
                    : 'bg-accent text-white hover:bg-blue-700'
                }`}
              >
                <Save size={14} />
                {isInList ? 'In Your List' : 'Add to List'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Core Profile Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3.5">
          <div className="p-4 rounded-xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium mb-1">
              <TrendingUp size={14} className="text-slate-400 dark:text-slate-500" />
              <span>Valuation</span>
            </div>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {company.currentValuation || 'Undisclosed'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium mb-1">
              <DollarSign size={14} className="text-slate-400 dark:text-slate-500" />
              <span>Total Funding</span>
            </div>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {company.fundingRaised}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium mb-1">
              <Layers size={14} className="text-slate-400 dark:text-slate-500" />
              <span>Stage</span>
            </div>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {company.stage}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium mb-1">
              <MapPin size={14} className="text-slate-400 dark:text-slate-500" />
              <span>Location</span>
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
              {company.headquarters}
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">{company.country}</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium mb-1">
              <Calendar size={14} className="text-slate-400 dark:text-slate-500" />
              <span>Founded</span>
            </div>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {company.foundedYear}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium mb-1">
              <Users size={14} className="text-slate-400 dark:text-slate-500" />
              <span>Headcount</span>
            </div>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {company.employeeCount}
            </p>
          </div>
        </div>

        {/* Valuation Growth Trajectory Graph Component */}
        <ValuationGrowthChart
          companyName={company.name}
          valuationHistory={company.valuationHistory}
          currentValuation={company.currentValuation}
          fundingRaised={company.fundingRaised}
        />

        {/* Funding Milestones Table */}
        {company.fundingRounds && company.fundingRounds.length > 0 && (
          <div className="bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 md:p-8 shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Historical Financing Rounds
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Detailed timeline of investment tranches, valuations, and syndicate participants
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {company.fundingRounds.length} Recorded Rounds
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-3">Round</th>
                    <th className="py-3 px-3">Date</th>
                    <th className="py-3 px-3">Capital Raised</th>
                    <th className="py-3 px-3">Post-Money Valuation</th>
                    <th className="py-3 px-3">Lead Investors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {company.fundingRounds.map((rnd, i) => (
                    <tr key={i} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="py-3.5 px-3 font-semibold text-slate-900 dark:text-white">
                        {rnd.round}
                      </td>
                      <td className="py-3.5 px-3 text-slate-500 dark:text-slate-400">
                        {rnd.date}
                      </td>
                      <td className="py-3.5 px-3 font-bold text-slate-900 dark:text-white">
                        {rnd.amount}
                      </td>
                      <td className="py-3.5 px-3 font-semibold text-accent dark:text-blue-400">
                        {rnd.valuation}
                      </td>
                      <td className="py-3.5 px-3 text-slate-600 dark:text-slate-300">
                        <div className="flex flex-wrap gap-1.5">
                          {rnd.investors && rnd.investors.length > 0 ? (
                            rnd.investors.map((inv, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]"
                              >
                                {inv}
                              </span>
                            ))
                          ) : (
                            <span>Institutional Syndicate</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Live Enrichment Panel */}
        <EnrichmentPanel
          enriching={enriching}
          enrichedData={enrichedData}
          onEnrich={handleEnrich}
        />

        {/* Internal Investment Notes */}
        <div className="bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 md:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Venture Intelligence Notes
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Private internal memos, diligence remarks, and thesis tracking for {company.name}.
              </p>
            </div>
            {savedNotesMessage && (
              <span className="text-xs font-semibold text-accent dark:text-blue-400 animate-fade-in flex items-center gap-1">
                <Star size={12} className="fill-accent text-accent inline" />
                Saved to Starred Portfolio with notes!
              </span>
            )}
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add internal investment thesis notes, founder impressions, key risk factors, or follow-up diligence tasks..."
            className="w-full h-32 p-4 text-xs sm:text-sm bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-accent resize-none transition"
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              Saving notes automatically stores this startup in your Saved list.
            </span>
            <button
              onClick={handleSaveNotes}
              className="px-4 py-2 rounded-xl bg-accent text-white hover:bg-blue-700 font-medium text-xs shadow-xs transition flex items-center gap-1.5"
            >
              <Save size={13} />
              Save Notes & Star Startup
            </button>
          </div>
        </div>
      </div>

      {showAddToList && (
        <AddToListModal
          onClose={() => setShowAddToList(false)}
          onAdd={(listId) => {
            addToList(listId, company.id);
            setShowAddToList(false);
          }}
        />
      )}
    </div>
  );
}
