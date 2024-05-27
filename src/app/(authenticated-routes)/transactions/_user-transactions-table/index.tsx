"use client";

import { ReactNode, useState } from "react";
import {
  Pagination,
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/table";
import { useGetTransactions } from "./data";
import { formatCurrency } from "@/utils/format-currency";
import { formatCentsToDollars } from "@/utils/number";

export const TransactionsTable = ({ userId }: { userId?: string }) => {
  const [after, setAfter] = useState<string | undefined>(undefined);
  const [before, setBefore] = useState<string | undefined>(undefined);
  const { totalCount, transactions, loading, pageInfo } = useGetTransactions({
    userId,
    limit: 10,
    after: after,
    before: before,
  });

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="flex flex-col gap-1">
      <div className="flex items-center">
        <div>{totalCount} - total rows</div>
        <Pagination
          onBack={() => {
            if (pageInfo && pageInfo.hasPreviousPage && pageInfo.startCursor) {
              setAfter(undefined);
              setBefore(pageInfo.startCursor);
            }
          }}
          onNext={() => {
            if (pageInfo && pageInfo.hasNextPage && pageInfo.endCursor) {
              setAfter(pageInfo.endCursor);
              setBefore(undefined);
            }
          }}
        />
      </div>
      <Table>
        <TableHead>
          <TransactionsTableRow>
            <TableHeader>Id</TableHeader>
            <TableHeader>Merchant</TableHeader>
            <TableHeader>Summary</TableHeader>
            <TableHeader>Amount</TableHeader>
          </TransactionsTableRow>
        </TableHead>
        <tbody>
          {transactions.map((transaction) => {
            if (transaction) {
              return (
                <TransactionsTableRow key={transaction.id}>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.merchant}</TableCell>
                  <TableCell>{transaction.summary}</TableCell>
                  <TableCell>
                    {formatCurrency({
                      amount: formatCentsToDollars(transaction.amountInCents),
                    })}
                  </TableCell>
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
    <TableRow className="grid grid-cols-[1fr_1fr_10em_10em] gap-2">
      {children}
    </TableRow>
  );
};
