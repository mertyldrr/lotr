import axios from "axios";

// TODO: fix types
export const fetchBooks = async (): Promise<any> => {
  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  };
  return await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/book`, {
    headers,
  });
};

export const fetchMovies = async (): Promise<any> => {
  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  };
  return await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/movie`, {
    headers,
  });
};

export const fetchCharacters = async (): Promise<any> => {
  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  };
  return await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/character`, {
    headers,
  });
};

export const fetchQuotes = async (): Promise<any> => {
  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  };
  return await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/quote`, {
    headers,
  });
};
