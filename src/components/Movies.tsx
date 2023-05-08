import { useEffect } from "react";
import { MovieHeaderOrder, MovieHeaders } from "../constants";
import { useMovieStore, useTableStore } from "../store/store";
import { Table } from "./Table";

export const Movies = () => {
  const fetchMovies = useMovieStore((store) => store.fetchMovies);
  const movies = useMovieStore((store) => store.movies);
  const updateTotalEntries = useTableStore((store) => store.updateTotalEntries);

  useEffect(() => {
    if (!movies) {
      const loadMovies = async () => {
        fetchMovies();
        // const movies = await fetchMovies();
        // updateMovies(movies);
        // updateTotalEntries(movies.length);
      };

      loadMovies();
    } else {
      updateTotalEntries(movies.length);
    }
  }, [movies, updateTotalEntries, fetchMovies]);

  return (
    <div className="w-full flex justify-center items-center p-4 lg:w-9/12">
      {movies && (
        <Table
          data={movies}
          headers={MovieHeaders}
          headerOrder={MovieHeaderOrder}
        />
      )}
    </div>
  );
};
