# VC Scout - Precision AI Scout for VCs

A polished, production-grade VC intelligence interface with live enrichment capabilities. Discover companies, create lists, save searches, and enrich profiles with real website data—all in a fast, intuitive interface.

## 🎯 Features

- **Company Discovery**: Search and filter through a curated database of startups with advanced filtering (industry, stage, funding)
- **Smart Search**: Global search that indexes company names, descriptions, and industries
- **Company Profiles**: Detailed profiles with company metrics, stage, funding, and location
- **Live Enrichment**: Fetch and analyze real public website data on-demand with AI scraping
- **Smart Lists**: Create and manage target lists, add/remove companies, export to CSV/JSON
- **Saved Searches**: Save complex search queries with filters for quick re-running
- **Notes & Annotations**: Add internal notes to companies for team collaboration
- **Export**: Export lists to CSV for downstream use

## 🏗️ Tech Stack

- **Frontend**: React 18 + Next.js 14 + TypeScript
- **Styling**: Tailwind CSS with refined aesthetic
- **State Management**: Zustand (lightweight, persistent)
- **UI Components**: Lucide React icons
- **API**: Next.js API routes for safe, server-side enrichment
- **Storage**: LocalStorage (with Zustand persistence)
- **Deployment**: Vercel (recommended) or Netlify

## 📋 Requirements

- Node.js 18+
- npm or yarn

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/yourname/vc-scout.git
cd vc-scout
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```
# Optional: Firecrawl API key (for real website scraping)
# NEXT_PUBLIC_FIRECRAWL_API_KEY=your_api_key_here

# Optional: for future integrations
# NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Note**: API keys are never exposed to the browser. All enrichment happens server-side via `/api/enrich`.

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📦 Project Structure

```
vc-scout/
├── app/
│   ├── layout.tsx              # Root layout with sidebar
│   ├── page.tsx                # Companies discovery page
│   ├── globals.css             # Global styles
│   ├── companies/
│   │   └── [id]/
│   │       └── page.tsx        # Company detail with enrichment
│   ├── lists/
│   │   └── page.tsx            # Manage lists page
│   ├── saved/
│   │   └── page.tsx            # Saved searches page
│   └── api/
│       └── enrich/
│           └── route.ts        # Enrichment API endpoint (server-side)
├── components/
│   ├── Sidebar.tsx             # Navigation sidebar
│   ├── SearchHeader.tsx        # Search + filters
│   ├── CompaniesTable.tsx      # Companies list table
│   ├── EnrichmentPanel.tsx     # Live enrichment UI
│   ├── AddToListModal.tsx      # Save to list dialog
│   └── CreateListModal.tsx     # Create new list dialog
├── lib/
│   ├── mockData.ts            # Mock company dataset
│   └── store.ts               # Zustand store (app state)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🔌 API Endpoints

### `POST /api/enrich`

Enriches a company with public website data.

**Request**:
```json
{
  "website": "https://vercel.com",
  "companyName": "Vercel"
}
```

**Response**:
```json
{
  "summary": "...",
  "whatTheyDo": ["...", "..."],
  "keywords": ["SaaS", "Developer Tools", ...],
  "signals": ["Active blog", "Careers page found", ...],
  "sources": [
    {
      "url": "https://vercel.com",
      "timestamp": 1708000000000
    }
  ]
}
```

**Security**: API keys (if used) are stored server-side in environment variables and never exposed to the browser.

## 💾 Data & State Management

### LocalStorage Persistence
- **Lists**: All created lists and companies saved within them
- **Saved Searches**: Search queries with filters
- Key: `vc-scout-store`

Zustand automatically syncs state to localStorage, so data persists across browser sessions.

### Mock Data
The app seeds with 8 mock companies (Vercel, Anthropic, Stripe, Figure AI, Canva, Scale AI, Notion, OpenAI). Replace `lib/mockData.ts` with real API calls to your company database.

## 🎨 Design & UX

### Aesthetic
- **Refined minimalism**: Clean typography, generous whitespace, careful color palette
- **Color scheme**: Slate grays, accent blue (#0066ff), white backgrounds
- **Typography**: Inter font family for consistency and legibility
- **Interactions**: Smooth transitions, hover states, loading indicators

### Key Pages

**1. Companies Discovery** (`/`)
- Global search with real-time filtering
- Sortable table with pagination
- Industry + Stage filters
- Save complex searches for later

**2. Company Profile** (`/companies/[id]`)
- Detailed company metrics (stage, funding, location)
- **Live enrichment panel**: Click "Enrich Now" to fetch and analyze website
- Internal notes for team collaboration
- Save to lists for tracking

**3. Lists Management** (`/lists`)
- Create named lists with descriptions
- Add/remove companies from lists
- Export lists to CSV
- Track companies by investment criteria

**4. Saved Searches** (`/saved`)
- View all saved search queries
- Load searches to re-run filtering
- Delete outdated searches

## 🔒 Security Best Practices

1. **API Keys Server-Side**: All enrichment API calls use server-side routes (`/api/enrich`). Keys in environment variables are never exposed to the browser.
2. **No Authentication**: This MVP assumes single-user (local) use. For multi-user, add auth (Firebase, Clerk, etc.).
3. **Rate Limiting**: Consider adding rate limits to `/api/enrich` in production.
4. **HTTPS**: Deploy with HTTPS enabled (Vercel does this by default).

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel login
vercel
```

1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy on push to main branch

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## 📊 Future Enhancements

### MVP Stretch Goals (in order of priority)
1. **Real Enrichment**: Integrate Firecrawl API for actual website scraping + Claude API for LLM extraction
2. **Queue + Rate Limiting**: Async job queue (Bull, Agenda) for heavy enrichment workloads
3. **Vector Search**: Embed company descriptions, use similarity search for "find similar companies"
4. **Database**: Move from localStorage → PostgreSQL (Supabase) for multi-user + persistence
5. **Authentication**: Add user accounts (Clerk, Firebase) for team collaboration
6. **CRM Integrations**: Sync lists to Salesforce, HubSpot, Affinity
7. **Slack Notifications**: Alert team when new companies match thesis
8. **Thesis Editor**: Visual UI to define and refine your investment thesis
9. **Scoring Engine**: Automatically score companies against your thesis
10. **Analytics**: Track which companies you've enriched, saved, and outcomes

## 🤝 Contributing

Pull requests welcome! Please follow the existing code style and add tests for new features.

## 📄 License

MIT

## 📞 Support

For issues or questions, open a GitHub issue or contact the maintainer.

---

**Built with care for VCs who value precision in sourcing.** ⚡
