# TB Scout - Precision Venture Intelligence Platform

A production-grade venture capital intelligence platform designed for fast discovery, valuation tracking, diligence note management, and real-time domain enrichment.

---

## 🎯 Key Features

- **200+ Curated Global Startups**: In-depth dataset spanning 20+ countries (United States, United Kingdom, France, Germany, India, Israel, Singapore, Canada, Sweden, Australia, Japan, Brazil, Switzerland, Netherlands, South Korea, etc.) across AI/ML, Fintech, Infrastructure, Robotics, SpaceTech, Enterprise SaaS, CleanTech, and Developer Tools.
- **Interactive Valuation & Growth Trajectory Chart**: Zero-dependency interactive SVG chart plotting historical financing rounds and valuation milestones with hover tooltips, valuation growth multiple tracking, and dual trend/round views.
- **Star / Saved Startups & Diligence Notes** (`/saved`):
  - 1-click star/bookmark any startup directly from the dashboard table or company profile.
  - Smart synchronization: saving diligence notes on a company profile automatically stars and saves the company with those notes.
  - Searchable portfolio view with quick filters (All / With Notes / Without Notes) and an inline note editor.
  - 1-click CSV export of your starred portfolio including internal diligence notes.
- **Country & Multi-Factor Search Engine**: Search by name, mission, sector, or country; filter by Country, Industry, Stage; and sort by Valuation (High/Low), Funding, Founded Year, or Alphabetical.
- **Executive Dark & Light Mode**: Built-in theme switcher located at the bottom left with standard single-color icons, persistent in `localStorage`.
- **3-Tier Resilient Logo System**: Local PNG override (`public/logos/{slug}.png`), domain-based Google favicon auto-discovery, and executive monogram avatar fallback.
- **Live Domain Enrichment**: On-demand domain scraping & signal extraction via `/api/enrich`.
- **Target Lists Management** (`/lists`): Create named lists, track companies by thesis criteria, and export lists to CSV.

---

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom slate palette (`darkMode: 'class'`)
- **State Management**: Zustand with persistent `localStorage` synchronization
- **Icons**: Lucide React (standard single-color executive styling)
- **Charts**: Custom interactive SVG vector charts (zero runtime dependencies, offline-ready)

---

## 📋 Requirements

- Node.js 18+
- npm or yarn

---

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/toni8283/VC_intelligence_interface.git
cd VC_intelligence_interface
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📦 Project Structure

```
VC_intelligence_interface/
├── app/
│   ├── layout.tsx              # Root layout with sidebar & state hydration
│   ├── page.tsx                # Wide discovery dashboard & KPI stats ribbon
│   ├── globals.css             # Base styles & dark mode scrollbars
│   ├── companies/
│   │   └── [id]/
│   │       └── page.tsx        # Company detail with valuation chart & notes
│   ├── lists/
│   │   └── page.tsx            # Custom investment lists management
│   ├── saved/
│   │   └── page.tsx            # Saved startups & diligence notes portfolio
│   └── api/
│       └── enrich/
│           └── route.ts        # Server-side domain enrichment endpoint
├── components/
│   ├── Sidebar.tsx             # TB Scout navigation & bottom theme switcher
│   ├── SearchHeader.tsx        # Country filter, industry, stage, and sorting
│   ├── CompaniesTable.tsx      # Table with 1-click star & dark mode hover
│   ├── CompanyLogo.tsx         # 3-tier resilient logo component
│   ├── ValuationGrowthChart.tsx# Interactive SVG valuation trajectory chart
│   ├── EnrichmentPanel.tsx     # Live domain enrichment UI
│   ├── AddToListModal.tsx      # Save to list dialog
│   └── CreateListModal.tsx     # Create new list dialog
├── lib/
│   ├── mockData.ts             # 204 global startups with full financing rounds
│   └── store.ts                # Zustand store (persisted state)
├── public/
│   └── logos/
│       └── README.md           # Custom company PNG logo guide
├── tailwind.config.js          # Tailwind theme & full slate shades
└── next.config.js              # Next.js configuration
```

---

## 🔌 API Endpoints

### `POST /api/enrich`

Enriches a company with public website data.

**Request**:
```json
{
  "website": "https://anthropic.com",
  "companyName": "Anthropic"
}
```

**Response**:
```json
{
  "summary": "...",
  "whatTheyDo": ["...", "..."],
  "keywords": ["AI/ML", "Foundation Models", "..."],
  "signals": ["Active careers portal", "Research publications found", "..."],
  "sources": [
    {
      "url": "https://anthropic.com",
      "timestamp": 1708000000000
    }
  ]
}
```

---

## 💾 State & Persistence

- **State Store**: Zustand with automatic `localStorage` hydration under key `vc-scout-store`.
- **Persisted Entities**:
  - `savedCompanies`: Starred startups with internal diligence notes and timestamps.
  - `lists`: Custom named company lists.
  - `darkMode`: Selected theme preference (`light` or `dark`).

---

## 📄 License

MIT

---

**TB Scout • Precision Venture Intelligence**
