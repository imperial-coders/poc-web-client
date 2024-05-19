import * as connectionUtils from "../../graphql/utils/limit-offset";

export interface Transaction {
  id: string;
  userId: string;
  amountInCents: number;
  summary?: string;
  transactionDate: Date;
  merchant?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SearchTransactionRequest {
  userId?: string;
  fromDate?: Date;
  offset: number;
  limit?: number;
}

export type SearchTransactionParams =
  connectionUtils.CursorifyPaginationArgs<SearchTransactionRequest>;

export interface CreateTransactionRequest {
  userId: string;
  amountInCents: number;
  summary?: string;
  date: Date;
  merchant?: string;
}
