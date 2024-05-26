import { ReactNode } from "react";

export const Table = ({ children }: { children: ReactNode }) => {
  return <table className="w-full text-sm text-left">{children}</table>;
};

export const TableHead = ({ children }: { children: ReactNode }) => {
  return <thead className="uppercase">{children}</thead>;
};

export const TableHeader = ({ children }: { children?: ReactNode }) => {
  return <th>{children}</th>;
};

export const TableRow = ({ children }: { children: ReactNode }) => {
  return <tr className="hover:bg-slate-200 border-b">{children}</tr>;
};

export const TableCell = ({ children }: { children: ReactNode }) => {
  return <td className="px-6 py-4">{children}</td>;
};
