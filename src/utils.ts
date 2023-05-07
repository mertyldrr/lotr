import axios from "axios";
import { Book, Character, FilteredCharacter, Movie, Quote } from "./types";

const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
};

export const fetchBooks = async (): Promise<Book[]> => {
  const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/book`, {
    headers,
  });
  return res.data.docs as Book[];
};

export const fetchMovies = async (): Promise<Movie[]> => {
  const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/movie`, {
    headers,
  });
  return res.data.docs as Movie[];
};

export const fetchCharacters = async (
  limit: number = 10,
  page: number = 1
): Promise<FilteredCharacter[]> => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/character?limit=${limit}&page=${page}`,
    {
      headers,
    }
  );
  const characters = res.data.docs as Character[];
  const filteredCharacters: FilteredCharacter[] = characters.map(
    ({ hair, realm, height, ...rest }) => rest
  );
  return filteredCharacters;
};

export const fetchQuotes = async (
  limit: number = 10,
  page: number = 1
): Promise<Quote[]> => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/quote?limit=${limit}&page=${page}`,
    {
      headers,
    }
  );
  return res.data.docs as Quote[];
};

export const fetchRandomQuote = async (id: string): Promise<Quote> => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/quote/${id}`,
    {
      headers,
    }
  );
  return res.data.docs[0] as Quote;
};
