import { useCallback, useEffect, useState } from "react";
import {
  useCharacterStore,
  useMovieStore,
  useQuoteStore,
} from "../store/store";
import { Quote } from "../types";

export const RandomQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const fetchQuotes = useQuoteStore((store) => store.fetchQuotes);
  const quotesCache = useQuoteStore((store) => store.quotesCache);
  const moviesCache = useMovieStore((store) => store.moviesCache);
  const charactersCache = useCharacterStore((store) => store.charactersCache);
  const fetchMovies = useMovieStore((store) => store.fetchMovies);
  const fetchCharacters = useCharacterStore((store) => store.fetchCharacters);

  const loadRandomQuote = useCallback(async () => {
    let quotes;
    let characters;
    let movies;

    if (quotesCache.length === 0) {
      quotes = await fetchQuotes();
    } else {
      quotes = quotesCache;
    }

    if (charactersCache.length === 0) {
      characters = await fetchCharacters();
    } else {
      characters = charactersCache;
    }

    if (moviesCache.length === 0) {
      movies = await fetchMovies();
    } else {
      movies = moviesCache;
    }

    const idx = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[idx];

    const movie = movies.find((movie) => movie?._id === randomQuote?.movie);
    const character = characters.find(
      (character) => character?._id === randomQuote?.character
    );

    if (movie && character) {
      randomQuote.movie = movie.name;
      randomQuote.character = character.name;
      setQuote(randomQuote);
    }
  }, [
    charactersCache,
    fetchCharacters,
    fetchMovies,
    fetchQuotes,
    moviesCache,
    quotesCache,
  ]);

  useEffect(() => {
    loadRandomQuote();
  }, [loadRandomQuote]);

  return (
    // subtracted nav height to not create scrollbar on y-axis
    <div className="max-w-screen-xl h-[calc(100vh-8rem)] flex flex-col mx-auto items-center justify-center p-6 lg:p-0">
      {quote && (
        <div className="flex">
          <p className="self-start text-green-500 font-bilbo text-lg md:text-4xl">
            {quote.movie}
          </p>
          <p className="p-8 font-bilbo text-white text-3xl md:text-6xl">
            "{quote.dialog}"
          </p>
          <p className="self-end font-bilbo text-lotrYellow text-lg md:text-4xl">
            {quote.character}
          </p>
        </div>
      )}

      <button
        className="font-aniron mt-10 p-2  "
        onClick={() => loadRandomQuote()}
      >
        <p className="font-bilbo text-amber-500 text-2xl md:text-4xl">
          New Random Quote
        </p>
      </button>
    </div>
  );
};
