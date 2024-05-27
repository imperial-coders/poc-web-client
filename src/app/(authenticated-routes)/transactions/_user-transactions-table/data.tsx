"use client";

import { gql } from "@/types/gql";
import { useQuery } from "@apollo/client";

const GET_TRANSACTIONS = gql(`
  query GetTransactions($userId: ID!, $first: Int, $last: Int, $after: String, $before: String) {
    allTransactions(first: $first, last: $last, after: $after, before: $before, userId: $userId) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          amountInCents
          merchant
          summary
          transactionDate
        }
      }
    }
  }
`);

export const useGetTransactions = ({
  userId,
  limit,
  after = "",
  before = "",
}: {
  userId?: string;
  limit: number;
  after?: string;
  before?: string;
}) => {
  const [first, last] = before ? [undefined, limit] : [limit, undefined];

  const { data, loading, error } = useQuery(GET_TRANSACTIONS, {
    skip: !userId,
    variables: {
      userId: userId ?? "",
      first,
      last,
      after,
      before,
    },
  });

  return {
    transactions:
      data?.allTransactions?.edges?.map((edge) => edge?.node ?? null) ?? [],
    pageInfo: data?.allTransactions?.pageInfo,
    totalCount: data?.allTransactions?.totalCount,
    loading,
    error,
  };
};
