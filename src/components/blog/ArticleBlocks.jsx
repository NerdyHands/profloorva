import Link from "next/link";

export function ArticleHeading({ children }) {
  return <h2 className="pt-4 text-3xl font-bold text-neutral-900">{children}</h2>;
}

export function ArticleLink({ to, children }) {
  return (
    <Link href={to} className="font-semibold text-amber-800 underline">
      {children}
    </Link>
  );
}

export function ArticleList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ArticleTable({ columns, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="w-full min-w-[36rem] text-left text-sm md:text-base">
        <thead className="bg-neutral-900 text-white">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-4 py-3 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ...cells]) => (
            <tr key={label} className="border-t border-neutral-200 align-top">
              <td className="px-4 py-4 font-semibold text-neutral-900">{label}</td>
              {cells.map((cell, index) => (
                <td key={index} className="px-4 py-4 text-neutral-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
