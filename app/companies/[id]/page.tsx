'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useStore, { Company } from '@/lib/store';
import { mockCompanies } from '@/lib/mockData';
import { ArrowLeft, Loader, Save, ExternalLink } from 'lucide-react';
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

  const enrichedData = useStore((state) => state.enrichedData[params.id]);
  const setEnrichedData = useStore((state) => state.setEnrichedData);
  const lists = useStore((state) => state.lists);
  const addToList = useStore((state) => state.addToList);

  useEffect(() => {
    const found = mockCompanies.find((c) => c.id === params.id);
    if (!found) {
      router.push('/');
      return;
    }
    setCompany(found);
    setLoading(false);
  }, [params.id, router]);

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
        error: 'Failed to enrich company. Please try again.',
        loading: false,
      });
    } finally {
      setEnriching(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin text-slate-400" size={32} />
      </div>
    );
  }

  if (!company) {
    return <div>Company not found</div>;
  }

  const isInList = lists.some((list) =>
    list.companyIds.includes(company.id)
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-slate-500 hover:text-slate-700 mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back
          </button>

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {company.logo && (
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 rounded-lg object-cover bg-slate-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <div>
                <h1 className="text-3xl font-semibold text-slate-900">{company.name}</h1>
                <p className="text-slate-500 mt-1">{company.description}</p>
              </div>
            </div>

            <button
              onClick={() => setShowAddToList(true)}
              className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition ${
                isInList
                  ? 'bg-blue-50 text-accent border border-blue-200'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Save size={18} />
              {isInList ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm text-slate-500 font-medium mb-2">Stage</p>
            <p className="text-lg font-semibold text-slate-900">{company.stage}</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm text-slate-500 font-medium mb-2">Funding Raised</p>
            <p className="text-lg font-semibold text-slate-900">{company.fundingRaised}</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm text-slate-500 font-medium mb-2">Founded</p>
            <p className="text-lg font-semibold text-slate-900">{company.foundedYear}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm mb-8">
          <div>
            <p className="text-slate-500 mb-1">Industry</p>
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              {company.industry}
            </span>
          </div>
          <div>
            <p className="text-slate-500 mb-1">Employees</p>
            <p className="text-slate-900">{company.employeeCount}</p>
          </div>
          <div>
            <p className="text-slate-500 mb-1">Headquarters</p>
            <p className="text-slate-900">{company.headquarters}</p>
          </div>
        </div>

        {/* Website Link */}
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-blue-700 font-medium mb-8"
        >
          Visit Website
          <ExternalLink size={16} />
        </a>

        {/* Enrichment Panel */}
        <EnrichmentPanel
          enriching={enriching}
          enrichedData={enrichedData}
          onEnrich={handleEnrich}
        />

        {/* Notes Section */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add internal notes about this company..."
            className="w-full h-32 p-4 border border-slate-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-blue-100 resize-none"
          />
          <button className="mt-3 px-4 py-2 rounded-lg bg-accent text-white hover:bg-blue-700 font-medium">
            Save Notes
          </button>
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
