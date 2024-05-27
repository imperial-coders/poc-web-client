import DataLoader from "dataloader";
import {
  CreateTransactionRequest,
  SearchTransactionParams,
  Transaction,
} from "./types";
import * as connectionUtils from "../../graphql/utils/limit-offset";
import { get, post } from "../../utils/fetch";

const { TRANSACTIONS_URL } = process.env;

export class TransactionService {
  private _transactionLoader?: DataLoader<string, Transaction | null>;

  transactionLoader() {
    if (!this._transactionLoader) {
      this._transactionLoader = new DataLoader(
        async (ids: readonly string[]) => {
          const url = new URL(`${TRANSACTIONS_URL}/transactions`);
          url.searchParams.append("ids", ids.join(","));
          return await get({ url: url.toString() });
        }
      );
    }

    return this._transactionLoader;
  }

  async createTransaction({
    userId,
    amountInCents,
    summary,
    date,
    merchant,
  }: CreateTransactionRequest) {
    const url = new URL(TRANSACTIONS_URL);
    return await post({
      url: url.toString(),
      body: {
        userId,
        amountInCents,
        summary,
        date,
        merchant,
      },
    });
  }

  async searchTransactions({
    limit = 20,
    offset = 0,
    fromDate,
    userId,
  }: {
    limit?: number;
    offset?: number;
    userId?: string;
    fromDate?: Date;
  }) {
    const url = new URL(`${TRANSACTIONS_URL}/transactions/search`);
    const params = new URLSearchParams({
      ...(userId && { userId }),
      ...(fromDate && { fromDate: fromDate.toISOString() }),
      ...(limit && { take: limit.toString() }),
      ...(offset && { skip: offset.toString() }),
    });
    url.search = params.toString();
    const { results, total } = await get({ url: url.toString() });

    return {
      results,
      total,
    };
  }

  async searchTransactionsConnections(args: SearchTransactionParams) {
    const { first, after, last, before, userId, fromDate } = args;

    const { limit, offset } = connectionUtils.parseArgs({
      first,
      after,
      last,
      before,
    });

    const response = await this.searchTransactions({
      userId,
      fromDate,
      limit,
      offset,
    });

    return connectionUtils.createConnection<Transaction>({
      total: response.total,
      nodes: response.results,
      offset,
    });
  }
}
