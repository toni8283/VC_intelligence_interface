'use client';

import { useState } from 'react';

interface CompanyLogoProps {
  name: string;
  website?: string;
  logo?: string;
  size?: number;
  className?: string;
}

// Consistent single-color executive styling for initials fallback
const MONOGRAM_STYLE = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-slate-700/80';

export default function CompanyLogo({
  name,
  website,
  logo,
  size = 40,
  className = '',
}: CompanyLogoProps) {
  const [imageError, setImageError] = useState(false);
  const [fallbackAttempt, setFallbackAttempt] = useState(0);

  // Extract clean domain from website URL
  let domain = '';
  if (website) {
    try {
      const url = new URL(website.startsWith('http') ? website : `https://${website}`);
      domain = url.hostname.replace(/^www\./, '');
    } catch {
      domain = '';
    }
  }

  // Generate clean initials (e.g., Anthropic -> AN, Scale AI -> SA)
  const initials = name
    .split(/\s+/)
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // Determine current image source
  let currentSrc = '';
  if (!imageError) {
    if (fallbackAttempt === 0 && logo) {
      currentSrc = logo;
    } else if (fallbackAttempt <= 1 && domain) {
      currentSrc = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    }
  }

  const handleImgError = () => {
    if (fallbackAttempt === 0 && domain && currentSrc !== `https://www.google.com/s2/favicons?domain=${domain}&sz=128`) {
      setFallbackAttempt(1);
    } else {
      setImageError(true);
    }
  };

  if (currentSrc && !imageError) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`flex-shrink-0 relative rounded-xl p-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xs flex items-center justify-center overflow-hidden ${className}`}
      >
        <img
          src={currentSrc}
          alt={`${name} logo`}
          className="w-full h-full object-contain rounded-lg"
          onError={handleImgError}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size, fontSize: Math.max(11, Math.floor(size * 0.38)) }}
      className={`flex-shrink-0 rounded-xl border flex items-center justify-center font-bold tracking-tight select-none shadow-xs ${MONOGRAM_STYLE} ${className}`}
      title={name}
    >
      {initials || name.slice(0, 2).toUpperCase()}
    </div>
  );
}

