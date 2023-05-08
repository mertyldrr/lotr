import { useCallback, useEffect } from "react";
import { QuoteHeaderOrder, QuoteHeaders, QuotesInPage } from "../constants";
import {
  useCharacterStore,
  useMovieStore,
  useQuoteStore,
  useTableStore,
} from "../store/store";
import { Quote } from "../types";
import { Table } from "./Table";

export const Quotes = () => {
  const movies = useMovieStore((store) => store.movies);
  const characters = useCharacterStore((store) => store.characters);
  const fetchQuotes = useQuoteStore((store) => store.fetchQuotes);
  const fetchCharacters = useCharacterStore((store) => store.fetchCharacters);
  const updateQuotes = useQuoteStore((store) => store.updateQuotes);
  const fetchMovies = useMovieStore((store) => store.fetchMovies);
  const quotes = useQuoteStore((store) => store.quotes);
  const quotesCache = useQuoteStore((store) => store.quotesCache);
  const moviesCache = useMovieStore((store) => store.moviesCache);
  const charactersCache = useCharacterStore((store) => store.charactersCache);
  const currentPage = useTableStore((store) => store.currentPage);
  const updateTotalEntries = useTableStore((store) => store.updateTotalEntries);

  const fillQuotesTable = useCallback(
    (quotes: Quote[]): void => {
      const filledQuotes = quotes.map((quote) => {
        const character = characters?.find(
          (character) => character._id === quote.character
        );
        const movie = movies?.find((movie) => movie._id === quote.movie);

        if (movie && character) {
          return { ...quote, movie: movie.name, character: character.name };
        } else if (movie) {
          return { ...quote, movie: movie.name };
        } else if (character) {
          return { ...quote, character: character.name };
        } else {
          return quote;
        }
      });
      updateQuotes(filledQuotes);
      updateTotalEntries(quotes.length);
    },
    [characters, movies, updateQuotes, updateTotalEntries]
  );

  useEffect(() => {
    const loadQuotes = async () => {
      if (quotesCache.length === 0) {
        await fetchQuotes();
      } else {
        fillQuotesTable(quotesCache);
      }
      if (moviesCache.length === 0) {
        await fetchMovies();
      }
      if (charactersCache.length === 0) {
        await fetchCharacters();
      }
    };
    loadQuotes();
  }, [
    fetchQuotes,
    fetchMovies,
    fetchCharacters,
    quotesCache,
    moviesCache,
    charactersCache,
    fillQuotesTable,
  ]);

  return (
    <div className="w-full flex justify-center items-center p-4 lg:w-9/12">
      {quotes && (
        <Table
          data={quotes.slice(
            (currentPage - 1) * QuotesInPage,
            currentPage * QuotesInPage
          )}
          headers={QuoteHeaders}
          headerOrder={QuoteHeaderOrder}
          rowsPerPage={QuotesInPage}
        />
      )}
    </div>
  );
};
