import { Book, FilteredCharacter, Movie, Quote } from "../types";
import { Tabs } from "../types";

export type TableStore = {
  activeTab: Tabs;
  tableHeaders: string[];
  headerOrder: string[];
  currentPage: number;
  totalEntries: number;
  prevPage: (page: number) => void;
  nextPage: (page: number) => void;
  updateTotalEntries: (length: number) => void;
  updateActiveTab: (activeTab: Tabs) => void;
  updateTableHeaders: (headers: string[], headerOrder: string[]) => void;
  reset: () => void;
};

export type BookStore = {
  books: Book[] | null;
  booksCache: Book[];
  fetchBooks: () => Promise<void>;
};

export type MovieStore = {
  movies: Movie[] | null;
  moviesCache: Movie[];
  fetchMovies: () => Promise<Movie[]>;
};

export type CharacterStore = {
  characters: FilteredCharacter[] | null;
  charactersCache: FilteredCharacter[];
  fetchCharacters: () => Promise<FilteredCharacter[]>;
};

export type QuoteStore = {
  quotes: Quote[] | null;
  quotesCache: Quote[];
  updateQuotes: (quotes: Quote[]) => void;
  fetchQuotes: () => Promise<Quote[]>;
};
