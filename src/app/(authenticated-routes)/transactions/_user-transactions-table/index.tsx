"use client";

import { ReactNode } from "react";
import {
  Pagination,
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/table";
import { useGetTransactions } from "./data";

export const TransactionsTable = ({ userId }: { userId?: string }) => {
  const { totalCount, transactions, loading } = useGetTransactions({
    userId,
    limit: 10,
  });

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="flex flex-col gap-1">
      <div className="flex items-center">
        <div>{totalCount} - total rows</div>
        <Pagination
          onBack={() => console.log("back")}
          onNext={() => console.log("next")}
        />
      </div>
      <Table>
        <TableHead>
          <TransactionsTableRow>
            <TableHeader />
            <TableHeader>Id</TableHeader>
            <TableHeader>Merchant</TableHeader>
            <TableHeader>Summary</TableHeader>
            <TableHeader>Amount</TableHeader>
          </TransactionsTableRow>
        </TableHead>
        <tbody>
          {transactions.map((transaction, index) => {
            if (transaction) {
              return (
                <TransactionsTableRow key={transaction.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.merchant}</TableCell>
                  <TableCell>{transaction.summary}</TableCell>
                  <TableCell>{transaction.amountInCents}</TableCell>
                </TransactionsTableRow>
              );
            }

            return null;
          })}
        </tbody>
      </Table>
    </div>
  );
};

const TransactionsTableRow = ({ children }: { children: ReactNode }) => {
  return (
    <TableRow className="grid grid-cols-[2rem_1fr_1fr_10em_10em] gap-2">
      {children}
    </TableRow>
  );
};
