"use client";

import { useGetTransactions } from "./data";

export const Transactions = () => {
  const { totalCount, transactions, loading } = useGetTransactions({
    userId: "clwb7mw8300003z6kadi875xg",
    limit: 10,
  });

  return <div>{totalCount}</div>;
};
