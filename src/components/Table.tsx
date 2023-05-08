import { Pagination } from "./Pagination";

type Props = {
  data: any;
  headers: string[];
  headerOrder: string[];
  rowsPerPage?: number;
};

export const Table = ({ data, headers, headerOrder, rowsPerPage }: Props) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-400 uppercase bg-yellow-950">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-3 py-2 lg:px-6 lg:py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, index: number) => (
            <tr
              key={index}
              className="border-b bg-emerald-950 border-gray-700 hover:bg-gray-600"
            >
              {headerOrder.map((key) =>
                key === "wikiUrl" ? (
                  <td key={key} className="px-3 py-2 break-all lg:px-4 lg:py-3">
                    <a
                      href={row[key]}
                      className="font-medium text-neutral-500 hover:underline"
                    >
                      {row[key]}
                    </a>
                  </td>
                ) : (
                  <td key={key} className="px-3 py-2 g:px-4 lg:py-3">
                    {row[key]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination rowsPerPage={rowsPerPage} />
    </div>
  );
};
