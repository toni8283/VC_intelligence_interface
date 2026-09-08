import { create } from 'zustand';

export interface FundingRound {
  round: string;
  amount: string;
  valuation: string;
  date: string;
  investors?: string[];
}

export interface ValuationPoint {
  year: string;
  valuation: number; // in millions USD
  valuationDisplay: string;
  event: string;
}

export interface Company {
  id: string;
  name: string;
  slug?: string;
  domain?: string;
  website: string;
  description: string;
  industry: string;
  stage: string;
  fundingRaised: string;
  fundingNum?: number; // in millions USD
  currentValuation?: string;
  valuationNum?: number; // in millions USD
  country: string;
  headquarters: string;
  foundedYear: number;
  employeeCount: string;
  logo?: string;
  tags?: string[];
  fundingRounds?: FundingRound[];
  valuationHistory?: ValuationPoint[];
}

export type SortOption = 'valuation-desc' | 'valuation-asc' | 'funding-desc' | 'name-asc' | 'year-desc';

export interface SavedCompany {
  companyId: string;
  notes?: string;
  savedAt: number;
}

export interface SavedSearch {
  id: string;
  name: string;
  query: string;
  filters: {
    industry?: string;
    stage?: string;
    country?: string;
    sortBy?: SortOption;
    minFunding?: string;
  };
  createdAt: number;
}

export interface CompanyList {
  id: string;
  name: string;
  description?: string;
  companyIds: string[];
  createdAt: number;
}

export interface EnrichedData {
  summary?: string;
  whatTheyDo?: string[];
  keywords?: string[];
  signals?: string[];
  sources?: { url: string; timestamp: number }[];
  loading?: boolean;
  error?: string;
}

interface AppStore {
  // Theme
  darkMode: boolean;
  setDarkMode: (isDark: boolean) => void;
  toggleDarkMode: () => void;

  // Companies
  companies: Company[];
  searchQuery: string;
  filters: {
    industry?: string;
    stage?: string;
    country?: string;
    sortBy?: SortOption;
  };
  setSearchQuery: (query: string) => void;
  setFilters: (filters: AppStore['filters']) => void;
  resetFilters: () => void;

  // Saved Companies with Notes (Starred)
  savedCompanies: Record<string, SavedCompany>;
  toggleSaveCompany: (companyId: string, notes?: string) => void;
  saveCompanyNotes: (companyId: string, notes: string) => void;
  removeSavedCompany: (companyId: string) => void;
  isCompanySaved: (companyId: string) => boolean;

  // Lists
  lists: CompanyList[];
  createList: (name: string, description?: string) => string;
  addToList: (listId: string, companyId: string) => void;
  removeFromList: (listId: string, companyId: string) => void;
  deleteList: (listId: string) => void;

  // Saved Searches (legacy/optional)
  savedSearches: SavedSearch[];
  saveCurrent: (name: string) => void;
  loadSearch: (searchId: string) => void;
  deleteSavedSearch: (searchId: string) => void;

  // Enrichment
  enrichedData: Record<string, EnrichedData>;
  setEnrichedData: (companyId: string, data: EnrichedData) => void;

  // Persistence
  hydrateFromStorage: () => void;
}

const useStore = create<AppStore>((set, get) => ({
  darkMode: false,
  companies: [],
  searchQuery: '',
  filters: {},
  enrichedData: {},
  lists: [],
  savedSearches: [],

  setDarkMode: (isDark) => {
    set({ darkMode: isDark });
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  },

  toggleDarkMode: () => {
    const next = !get().darkMode;
    get().setDarkMode(next);
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilters: (filters) => set({ filters }),
  resetFilters: () => set({ filters: {} }),

  savedCompanies: {},

  toggleSaveCompany: (companyId, notes) => {
    set((state) => {
      const existing = state.savedCompanies[companyId];
      if (existing) {
        const copy = { ...state.savedCompanies };
        delete copy[companyId];
        return { savedCompanies: copy };
      }
      return {
        savedCompanies: {
          ...state.savedCompanies,
          [companyId]: {
            companyId,
            notes: notes || '',
            savedAt: Date.now(),
          },
        },
      };
    });
  },

  saveCompanyNotes: (companyId, notes) => {
    set((state) => ({
      savedCompanies: {
        ...state.savedCompanies,
        [companyId]: {
          companyId,
          notes,
          savedAt: state.savedCompanies[companyId]?.savedAt || Date.now(),
        },
      },
    }));
  },

  removeSavedCompany: (companyId) => {
    set((state) => {
      const copy = { ...state.savedCompanies };
      delete copy[companyId];
      return { savedCompanies: copy };
    });
  },

  isCompanySaved: (companyId) => {
    return Boolean(get().savedCompanies[companyId]);
  },

  createList: (name, description) => {
    const newList: CompanyList = {
      id: Math.random().toString(36),
      name,
      description,
      companyIds: [],
      createdAt: Date.now(),
    };
    set((state) => ({
      lists: [...state.lists, newList],
    }));
    return newList.id;
  },

  addToList: (listId, companyId) => {
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId && !list.companyIds.includes(companyId)
          ? { ...list, companyIds: [...list.companyIds, companyId] }
          : list
      ),
    }));
  },

  removeFromList: (listId, companyId) => {
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? { ...list, companyIds: list.companyIds.filter((id) => id !== companyId) }
          : list
      ),
    }));
  },

  deleteList: (listId) => {
    set((state) => ({
      lists: state.lists.filter((list) => list.id !== listId),
    }));
  },

  saveCurrent: (name) => {
    const { searchQuery, filters } = get();
    const newSearch: SavedSearch = {
      id: Math.random().toString(36),
      name,
      query: searchQuery,
      filters,
      createdAt: Date.now(),
    };
    set((state) => ({
      savedSearches: [...state.savedSearches, newSearch],
    }));
  },

  loadSearch: (searchId) => {
    const search = get().savedSearches.find((s) => s.id === searchId);
    if (search) {
      set({
        searchQuery: search.query,
        filters: search.filters,
      });
    }
  },

  deleteSavedSearch: (searchId) => {
    set((state) => ({
      savedSearches: state.savedSearches.filter((s) => s.id !== searchId),
    }));
  },

  setEnrichedData: (companyId, data) => {
    set((state) => ({
      enrichedData: {
        ...state.enrichedData,
        [companyId]: data,
      },
    }));
  },

  hydrateFromStorage: () => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('vc-scout-store');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        const isDark = Boolean(data.darkMode);
        set({
          lists: data.lists || [],
          savedSearches: data.savedSearches || [],
          savedCompanies: data.savedCompanies || {},
          darkMode: isDark,
        });
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        console.error('Failed to parse stored data', e);
      }
    } else {
      // Check system preference if no stored value
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        set({ darkMode: true });
        document.documentElement.classList.add('dark');
      }
    }
  },
}));

// Persist to localStorage
if (typeof window !== 'undefined') {
  useStore.subscribe((state) => {
    localStorage.setItem(
      'vc-scout-store',
      JSON.stringify({
        lists: state.lists,
        savedSearches: state.savedSearches,
        savedCompanies: state.savedCompanies,
        darkMode: state.darkMode,
      })
    );
  });
}

export default useStore;
