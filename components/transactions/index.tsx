"use client";

import {
  Pagination,
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";
import { useGetTransactions } from "./data";

export const Transactions = ({ userId }: { userId?: string }) => {
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
          <TableRow>
            <TableHeader />
            <TableHeader>Id</TableHeader>
            <TableHeader>Merchant</TableHeader>
            <TableHeader>Summary</TableHeader>
            <TableHeader>Amount</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {/* @ts-ignore */}
          {transactions.map((t, index) => {
            return (
              <TableRow key={t.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{t.id}</TableCell>
                <TableCell>{t.merchant}</TableCell>
                <TableCell>{t.summary}</TableCell>
                <TableCell>{t.amountInCents}</TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
