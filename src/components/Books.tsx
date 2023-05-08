import { useEffect } from "react";
import { BookHeaderOrder, BookHeaders } from "../constants";
import { useBookStore, useTableStore } from "../store/store";
import { Table } from "./Table";

export const Books = () => {
  const fetchBooks = useBookStore((store) => store.fetchBooks);
  const books = useBookStore((store) => store.books);
  const updateTotalEntries = useTableStore((store) => store.updateTotalEntries);

  useEffect(() => {
    if (!books) {
      const loadBooks = async () => {
        fetchBooks();
      };

      loadBooks();
    } else {
      updateTotalEntries(books.length);
    }
  }, [books, updateTotalEntries, fetchBooks]);

  return (
    <div className="w-full flex justify-center items-center p-4 lg:w-9/12">
      {books && (
        <Table
          data={books}
          headers={BookHeaders}
          headerOrder={BookHeaderOrder}
        />
      )}
    </div>
  );
};
