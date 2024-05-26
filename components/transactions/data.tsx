"use client";

// TODO - FIX - This is the wrong GQL import - Other one isn't working
import { gql, useQuery } from "@apollo/client";

const GET_TRANSACTIONS = gql(`
query GetTransactions($userId: ID!, $first: Int, $after: String) {
    allTransactions(first: $first, after: $after, userId: $userId) {
      totalCount
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
  userId: string;
  limit: number;
  offset?: number;
}) => {
  const { data, loading, error } = useQuery(GET_TRANSACTIONS, {
    variables: {
      userId,
      first: limit,
      ...(offset && { after: offset }),
    },
  });

  return {
    transactions: data?.allTransactions?.edges ?? [],
    totalCount: data?.allTransactions?.totalCount,
    loading,
    error,
  };
};
