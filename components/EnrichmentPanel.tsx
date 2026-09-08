'use client';

import { Loader, Globe, ExternalLink, AlertCircle } from 'lucide-react';
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
    <div className="bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 md:p-8 shadow-xs">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Globe size={18} className="text-slate-400 dark:text-slate-500" />
            Live Domain Enrichment
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Extract proprietary signals, keywords, and operating summaries from web domains
          </p>
        </div>
        <button
          onClick={onEnrich}
          disabled={enriching}
          className="px-4 py-2 rounded-xl bg-accent text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-xs flex items-center gap-2 shadow-xs transition"
        >
          {enriching ? (
            <>
              <Loader size={14} className="animate-spin" />
              Analyzing Web Assets...
            </>
          ) : (
            <>
              <Globe size={14} />
              Enrich Domain
            </>
          )}
        </button>
      </div>

      {enrichedData?.error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex gap-3">
          <AlertCircle size={18} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900 dark:text-red-300 text-xs">Enrichment Failed</p>
            <p className="text-red-700 dark:text-red-400 text-xs">{enrichedData.error}</p>
          </div>
        </div>
      )}

      {!enrichedData || (enrichedData.loading && !enrichedData.summary) ? (
        <div className="text-center py-12 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
          <Globe size={24} className="text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Click &ldquo;Enrich Domain&rdquo; to fetch real-time public telemetry, competitive positioning, and signals.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Summary */}
          {enrichedData.summary && (
            <div>
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Executive Summary</h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50/70 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">{enrichedData.summary}</p>
            </div>
          )}

          {/* What They Do */}
          {enrichedData.whatTheyDo && enrichedData.whatTheyDo.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Core Product Offerings</h4>
              <ul className="space-y-2">
                {enrichedData.whatTheyDo.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-accent dark:text-blue-400 font-bold flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Keywords */}
          {enrichedData.keywords && enrichedData.keywords.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Taxonomy & Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {enrichedData.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/50"
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
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Derived Signals</h4>
              <div className="space-y-2">
                {enrichedData.signals.map((signal, i) => (
                  <div key={i} className="flex gap-2.5 items-center text-xs">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sources */}
          {enrichedData.sources && enrichedData.sources.length > 0 && (
            <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5">
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Verified Sources</h4>
              <div className="space-y-2">
                {enrichedData.sources.map((source, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  >
                    <div className="text-xs truncate mr-2">
                      <p className="text-slate-900 dark:text-white font-medium truncate">
                        {source.url}
                      </p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500">
                        {new Date(source.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      <ExternalLink size={14} />
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
