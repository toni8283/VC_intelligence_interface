'use client';

import { useState, useId } from 'react';
import { ValuationPoint } from '@/lib/store';
import { TrendingUp, DollarSign, Award, BarChart3, LineChart } from 'lucide-react';

interface ValuationGrowthChartProps {
  companyName: string;
  valuationHistory?: ValuationPoint[];
  currentValuation?: string;
  fundingRaised?: string;
}

export default function ValuationGrowthChart({
  companyName,
  valuationHistory = [],
  currentValuation,
  fundingRaised,
}: ValuationGrowthChartProps) {
  const [activePointIndex, setActivePointIndex] = useState<number | null>(null);
  const [chartView, setChartView] = useState<'line' | 'bars'>('line');
  const gradientId = useId();

  if (!valuationHistory || valuationHistory.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-center">
        <TrendingUp className="mx-auto text-slate-300 dark:text-slate-600 mb-3" size={32} />
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Valuation timeline data is being compiled for {companyName}.
        </p>
      </div>
    );
  }

  // Calculate Growth Multiple
  const firstVal = valuationHistory[0]?.valuation || 1;
  const lastVal = valuationHistory[valuationHistory.length - 1]?.valuation || 1;
  const growthMultiple = (lastVal / firstVal).toFixed(1);

  // SVG Chart Geometry
  const width = 800;
  const height = 300;
  const padding = { top: 35, right: 40, bottom: 45, left: 65 };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxValRaw = Math.max(...valuationHistory.map((p) => p.valuation));
  // Round up max for clean gridlines
  const maxVal = Math.ceil(maxValRaw * 1.15) || 100;

  // Coordinate mapping
  const points = valuationHistory.map((pt, idx) => {
    const x = padding.left + (idx / Math.max(1, valuationHistory.length - 1)) * chartWidth;
    const y = padding.top + chartHeight - (pt.valuation / maxVal) * chartHeight;
    return { ...pt, x, y };
  });

  // Generate smooth SVG curve path
  const linePath = points.reduce((acc, point, i, arr) => {
    if (i === 0) return `M ${point.x},${point.y}`;
    const prev = arr[i - 1];
    const cp1x = prev.x + (point.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (point.x - prev.x) / 2;
    const cp2y = point.y;
    return `${acc} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${point.x},${point.y}`;
  }, '');

  // Area under curve path
  const areaPath = points.length > 0
    ? `${linePath} L ${points[points.length - 1].x},${padding.top + chartHeight} L ${points[0].x},${padding.top + chartHeight} Z`
    : '';

  // Format Y-axis value
  const formatYAxis = (val: number) => {
    if (val >= 1000) {
      return `$${(val / 1000).toFixed(val % 1000 === 0 ? 0 : 1)}B`;
    }
    return `$${Math.round(val)}M`;
  };

  const activePoint = activePointIndex !== null ? points[activePointIndex] : points[points.length - 1];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs">
      {/* Header & Metrics */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-blue-400">
              <TrendingUp size={18} />
            </span>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Valuation & Growth Trajectory
            </h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Historical net worth and valuation progression over funding milestones
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
          <button
            type="button"
            onClick={() => setChartView('line')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              chartView === 'line'
                ? 'bg-white dark:bg-slate-900 text-accent dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <LineChart size={14} />
            Trend Curve
          </button>
          <button
            type="button"
            onClick={() => setChartView('bars')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              chartView === 'bars'
                ? 'bg-white dark:bg-slate-900 text-accent dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <BarChart3 size={14} />
            Rounds Breakdown
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            <DollarSign size={14} className="text-accent" />
            Current Valuation
          </div>
          <p className="text-xl font-bold text-slate-900 dark:text-white">
            {currentValuation || formatYAxis(lastVal)}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            <TrendingUp size={14} className="text-emerald-500" />
            Valuation Growth
          </div>
          <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            {growthMultiple}x
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            <DollarSign size={14} className="text-blue-500" />
            Total Capital Raised
          </div>
          <p className="text-xl font-bold text-slate-900 dark:text-white">
            {fundingRaised || 'N/A'}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            <Award size={14} className="text-purple-500" />
            Milestones Tracked
          </div>
          <p className="text-xl font-bold text-slate-900 dark:text-white">
            {valuationHistory.length} Rounds
          </p>
        </div>
      </div>

      {chartView === 'line' ? (
        /* Interactive SVG Curve */
        <div className="relative w-full overflow-hidden">
          {/* Active hover info badge */}
          {activePoint && (
            <div className="mb-2 p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/50 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-blue-900 dark:text-blue-200">
                  {activePoint.event} ({activePoint.year})
                </span>
                <span className="text-slate-400 dark:text-slate-500">•</span>
                <span className="text-slate-600 dark:text-slate-300">
                  Valuation:{' '}
                  <strong className="text-slate-900 dark:text-white font-bold">
                    {activePoint.valuationDisplay}
                  </strong>
                </span>
              </div>
              <span className="text-slate-400 dark:text-slate-500 italic">
                Hover milestones on chart to inspect
              </span>
            </div>
          )}

          <div className="w-full aspect-[16/7] min-h-[260px]">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-full overflow-visible font-sans select-none"
            >
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0066ff" stopOpacity="0.28" />
                  <stop offset="85%" stopColor="#0066ff" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="#0066ff" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Gridlines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                const yVal = maxVal * (1 - ratio);
                const yPos = padding.top + ratio * chartHeight;
                return (
                  <g key={ratio}>
                    <line
                      x1={padding.left}
                      y1={yPos}
                      x2={width - padding.right}
                      y2={yPos}
                      className="stroke-slate-100 dark:stroke-slate-800"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                    />
                    <text
                      x={padding.left - 10}
                      y={yPos + 4}
                      textAnchor="end"
                      className="text-[11px] fill-slate-400 dark:fill-slate-500 font-medium"
                    >
                      {formatYAxis(yVal)}
                    </text>
                  </g>
                );
              })}

              {/* Shaded Area */}
              {areaPath && (
                <path d={areaPath} fill={`url(#${gradientId})`} />
              )}

              {/* Curve Line */}
              {linePath && (
                <path
                  d={linePath}
                  fill="none"
                  stroke="#0066ff"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Milestone Dots and X-axis Labels */}
              {points.map((pt, idx) => {
                const isHovered = activePointIndex === idx;
                return (
                  <g
                    key={idx}
                    className="cursor-pointer group"
                    onMouseEnter={() => setActivePointIndex(idx)}
                    onClick={() => setActivePointIndex(idx)}
                  >
                    {/* Hover vertical guide */}
                    {isHovered && (
                      <line
                        x1={pt.x}
                        y1={padding.top}
                        x2={pt.x}
                        y2={padding.top + chartHeight}
                        stroke="#0066ff"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        opacity="0.6"
                      />
                    )}

                    {/* Outer pulse circle */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? 9 : 6}
                      className="fill-blue-500/20 dark:fill-blue-400/20 transition-all duration-200"
                    />

                    {/* Core circle */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? 5.5 : 4}
                      className="fill-white dark:fill-slate-900 stroke-accent dark:stroke-blue-400 transition-all duration-200"
                      strokeWidth="2.5"
                    />

                    {/* X-axis year */}
                    <text
                      x={pt.x}
                      y={padding.top + chartHeight + 22}
                      textAnchor="middle"
                      className={`text-[11px] font-medium transition-colors ${
                        isHovered
                          ? 'fill-accent font-bold'
                          : 'fill-slate-500 dark:fill-slate-400'
                      }`}
                    >
                      {pt.year}
                    </text>

                    {/* Event label on alternate points or hovered */}
                    <text
                      x={pt.x}
                      y={pt.y - 12}
                      textAnchor="middle"
                      className={`text-[10px] font-semibold transition-all ${
                        isHovered
                          ? 'fill-slate-900 dark:fill-white font-bold text-[11px]'
                          : 'fill-slate-600 dark:fill-slate-400 opacity-85'
                      }`}
                    >
                      {pt.valuationDisplay}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      ) : (
        /* Breakdown Bars & Rounds View */
        <div className="space-y-3">
          {valuationHistory.map((round, idx) => {
            const percentage = Math.max(8, (round.valuation / maxVal) * 100);
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition"
              >
                <div className="flex justify-between items-center text-xs mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {round.event}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                      {round.year}
                    </span>
                  </div>
                  <span className="font-bold text-accent dark:text-blue-400 text-sm">
                    {round.valuationDisplay}
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700/60 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-accent h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
