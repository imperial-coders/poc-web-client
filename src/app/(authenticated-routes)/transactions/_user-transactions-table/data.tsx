"use client";

import { gql } from "@/types/gql";
import { useQuery } from "@apollo/client";

const GET_TRANSACTIONS = gql(`
  query GetTransactions($userId: ID!, $first: Int, $after: String) {
    allTransactions(first: $first, after: $after, userId: $userId) {
      totalCount
      pageInfo {
        endCursor
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
  offset,
}: {
  userId?: string;
  limit: number;
  offset?: string;
}) => {
  const { data, loading, error } = useQuery(GET_TRANSACTIONS, {
    skip: !userId,
    variables: {
      userId: userId ?? "",
      first: limit,
      ...(offset && { after: offset }),
    },
  });

  return {
    transactions:
      data?.allTransactions?.edges?.map((edge) => edge?.node ?? null) ?? [],
    endCursor: data?.allTransactions?.pageInfo?.endCursor,
    totalCount: data?.allTransactions?.totalCount,
    loading,
    error,
  };
};
