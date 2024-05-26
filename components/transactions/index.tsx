"use client";

import { Table, TableCell, TableHead, TableHeader, TableRow } from "../table";
import { useGetTransactions } from "./data";

export const Transactions = () => {
  const { totalCount, transactions, loading } = useGetTransactions({
    userId: "clwb7mw8300003z6kadi875xg",
    limit: 10,
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Id</TableHeader>
          <TableHeader>Merchant</TableHeader>
          <TableHeader>Summary</TableHeader>
          <TableHeader>Amount</TableHeader>
        </TableRow>
      </TableHead>
      <tbody>
        {/* @ts-ignore */}
        {transactions.map((t) => {
          return (
            <TableRow key={t.id}>
              <TableCell>{t.id}</TableCell>
              <TableCell>{t.merchant}</TableCell>
              <TableCell>{t.summary}</TableCell>
              <TableCell>{t.amountInCents}</TableCell>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};
