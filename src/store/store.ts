import { create } from "zustand";
import { BookHeaders } from "../constants";
import { FilteredCharacter, Tabs } from "../types";
import {
  fetchBooks,
  fetchCharacters,
  fetchMovies,
  fetchQuotes,
} from "../utils";
import {
  BookStore,
  CharacterStore,
  MovieStore,
  QuoteStore,
  TableStore,
} from "./types";

export const useTableStore = create<TableStore>((set) => ({
  activeTab: Tabs.BOOK,
  tableHeaders: BookHeaders,
  headerOrder: BookHeaders,
  currentPage: 1,
  totalEntries: 0,
  nextPage: (page) => set(() => ({ currentPage: page + 1 })),
  prevPage: (page) => set(() => ({ currentPage: page - 1 })),
  updateTotalEntries: (length) => set(() => ({ totalEntries: length })),
  updateActiveTab: (tab) => set(() => ({ activeTab: tab })),
  updateTableHeaders: (headers, headerOrder) =>
    set(() => ({ tableHeaders: headers, headerOrder: headerOrder })),
  reset: () => set({ currentPage: 1, totalEntries: 0 }),
}));

export const useBookStore = create<BookStore>((set) => ({
  books: null,
  booksCache: [],
  fetchBooks: async () => {
    const books = await fetchBooks();
    set({ books, booksCache: books });
  },
}));

export const useMovieStore = create<MovieStore>((set) => ({
  movies: null,
  moviesCache: [],
  fetchMovies: async () => {
    const movies = await fetchMovies();
    set({ movies, moviesCache: movies });
    return movies;
  },
}));

export const useCharacterStore = create<CharacterStore>((set) => ({
  characters: null,
  charactersCache: [],
  fetchCharacters: async (): Promise<FilteredCharacter[]> => {
    const characters = await fetchCharacters(3000);
    set({ characters, charactersCache: characters });
    return characters;
  },
}));

export const useQuoteStore = create<QuoteStore>((set) => ({
  quotes: null,
  quotesCache: [],
  updateQuotes: (quotes) => set({ quotes: quotes }),
  fetchQuotes: async () => {
    const quotes = await fetchQuotes(3000);
    set({ quotes, quotesCache: quotes });
    return quotes;
  },
}));
