import { ReactNode } from "react";

export const Table = ({ children }: { children: ReactNode }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      {children}
    </table>
  );
};

export const TableHead = ({ children }: { children: ReactNode }) => {
  return (
    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      {children}
    </thead>
  );
};

export const TableHeader = ({ children }: { children?: ReactNode }) => {
  return <th>{children}</th>;
};

export const TableRow = ({ children }: { children: ReactNode }) => {
  return (
    <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
      {children}
    </tr>
  );
};

export const TableCell = ({ children }: { children: ReactNode }) => {
  return <td className="px-6 py-4">{children}</td>;
};
