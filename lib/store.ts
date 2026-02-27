import { create } from 'zustand';

export interface Company {
  id: string;
  name: string;
  website: string;
  description: string;
  industry: string;
  stage: string;
  fundingRaised: string;
  headquarters: string;
  foundedYear: number;
  employeeCount: string;
  logo: string;
}

export interface SavedSearch {
  id: string;
  name: string;
  query: string;
  filters: {
    industry?: string;
    stage?: string;
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
  // Companies
  companies: Company[];
  searchQuery: string;
  filters: {
    industry?: string;
    stage?: string;
  };
  setSearchQuery: (query: string) => void;
  setFilters: (filters: AppStore['filters']) => void;
  resetFilters: () => void;

  // Lists
  lists: CompanyList[];
  createList: (name: string, description?: string) => string;
  addToList: (listId: string, companyId: string) => void;
  removeFromList: (listId: string, companyId: string) => void;
  deleteList: (listId: string) => void;

  // Saved Searches
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
  companies: [],
  searchQuery: '',
  filters: {},
  enrichedData: {},
  lists: [],
  savedSearches: [],

  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilters: (filters) => set({ filters }),
  resetFilters: () => set({ filters: {} }),

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
      const data = JSON.parse(stored);
      set({
        lists: data.lists || [],
        savedSearches: data.savedSearches || [],
      });
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
      })
    );
  });
}

export default useStore;
