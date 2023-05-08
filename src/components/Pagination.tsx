import { useTableStore } from "../store/store";

type Props = {
  rowsPerPage?: number;
};

export const Pagination = ({ rowsPerPage }: Props) => {
  const totalEntries = useTableStore((store) => store.totalEntries);
  const nextPage = useTableStore((store) => store.nextPage);
  const prevPage = useTableStore((store) => store.prevPage);
  const currentPage = useTableStore((store) => store.currentPage);
  const itemsPerPage = rowsPerPage ? rowsPerPage : totalEntries;
  return (
    <div className="flex flex-col items-center py-6">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {(currentPage - 1) * itemsPerPage + 1}{" "}
        </span>
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPage * itemsPerPage}{" "}
        </span>
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalEntries}{" "}
        </span>
        Entries
      </span>
      <div className="inline-flex xs:mt-0 py-3">
        <button
          className="px-4 py-2 text-sm font-medium text-white disabled:opacity-40 bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => prevPage(currentPage)}
          disabled={(currentPage - 1) * itemsPerPage + 1 === 1}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 text-sm font-medium text-white disabled:opacity-40 bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => nextPage(currentPage)}
          disabled={currentPage * itemsPerPage === totalEntries}
        >
          Next
        </button>
      </div>
    </div>
  );
};
