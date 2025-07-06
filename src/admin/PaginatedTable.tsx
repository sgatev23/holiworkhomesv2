import { useState } from 'react';

type Column<T> = {
  header: string;
  accessor: keyof T;
};

interface Props<T> {
  columns: Column<T>[];
  data: T[];
  pageSize?: number;
}

function PaginatedTable<T extends { id: number | string }>({ columns, data, pageSize = 10 }: Props<T>) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(data.length / pageSize);

  const slice = data.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div>
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th key={String(col.accessor)} className="px-2 py-1 text-left border-b">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slice.map((row) => (
            <tr key={row.id} className="border-b">
              {columns.map((col) => (
                <td key={String(col.accessor)} className="px-2 py-1">
                  {String(row[col.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-2">
        <button onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0}
          className="px-2 py-1 border rounded disabled:opacity-50">
          Prev
        </button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))} disabled={page + 1 >= totalPages}
          className="px-2 py-1 border rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginatedTable;
