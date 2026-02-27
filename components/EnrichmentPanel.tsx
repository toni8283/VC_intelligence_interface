'use client';

import { Loader, Zap, ExternalLink, AlertCircle } from 'lucide-react';
import { EnrichedData } from '@/lib/store';

interface EnrichmentPanelProps {
  enriching: boolean;
  enrichedData?: EnrichedData;
  onEnrich: () => void;
}

export default function EnrichmentPanel({
  enriching,
  enrichedData,
  onEnrich,
}: EnrichmentPanelProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <Zap size={20} className="text-yellow-500" />
          Live Enrichment
        </h3>
        <button
          onClick={onEnrich}
          disabled={enriching}
          className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
        >
          {enriching ? (
            <>
              <Loader size={16} className="animate-spin" />
              Enriching...
            </>
          ) : (
            <>
              <Zap size={16} />
              Enrich Now
            </>
          )}
        </button>
      </div>

      {enrichedData?.error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex gap-3">
          <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-900">Enrichment Failed</p>
            <p className="text-red-700 text-sm">{enrichedData.error}</p>
          </div>
        </div>
      )}

      {!enrichedData || (enrichedData.loading && !enrichedData.summary) ? (
        <div className="text-center py-12">
          <Zap size={32} className="text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">
            Click "Enrich Now" to fetch and analyze public website data
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Summary */}
          {enrichedData.summary && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Summary</h4>
              <p className="text-slate-700 leading-relaxed">{enrichedData.summary}</p>
            </div>
          )}

          {/* What They Do */}
          {enrichedData.whatTheyDo && enrichedData.whatTheyDo.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-3">What They Do</h4>
              <ul className="space-y-2">
                {enrichedData.whatTheyDo.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <span className="text-accent font-semibold flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Keywords */}
          {enrichedData.keywords && enrichedData.keywords.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {enrichedData.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-blue-50 text-accent border border-blue-200"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Signals */}
          {enrichedData.signals && enrichedData.signals.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Derived Signals</h4>
              <div className="space-y-2">
                {enrichedData.signals.map((signal, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-green-600 font-semibold flex-shrink-0">✓</span>
                    <span className="text-slate-700">{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sources */}
          {enrichedData.sources && enrichedData.sources.length > 0 && (
            <div className="border-t border-slate-200 pt-6">
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Sources</h4>
              <div className="space-y-2">
                {enrichedData.sources.map((source, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 transition"
                  >
                    <div className="text-sm">
                      <p className="text-slate-900 font-medium truncate">
                        {source.url}
                      </p>
                      <p className="text-xs text-slate-400">
                        {new Date(source.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-200 rounded-lg transition"
                    >
                      <ExternalLink size={16} className="text-slate-400" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
