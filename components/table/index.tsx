import { ReactNode } from "react";

export const Table = ({ children }: { children: ReactNode }) => {
  return <table>{children}</table>;
};

export const TableHead = ({ children }: { children: ReactNode }) => {
  return <thead>{children}</thead>;
};

export const TableHeader = ({ children }: { children: ReactNode }) => {
  return <th>{children}</th>;
};

export const TableRow = ({ children }: { children: ReactNode }) => {
  return <tr>{children}</tr>;
};

export const TableCell = ({ children }: { children: ReactNode }) => {
  return <td className="px-6 py-4">{children}</td>;
};
