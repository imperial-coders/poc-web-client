import DataLoader from "dataloader";
import { SearchTransactionParams, Transaction } from "./types";
import * as connectionUtils from "../../graphql/utils/limit-offset";

const { DATE_TIME_FORMAT = "" } = process.env;

export class TransactionService {
  private _transactionLoader?: DataLoader<string, Transaction | null>;

  transactionLoader() {
    if (!this._transactionLoader) {
      this._transactionLoader = new DataLoader(
        async (ids: readonly string[]) => {
          //   const matches = await prisma.game.findMany({
          //     where: {
          //       id: {
          //         in: ids as string[],
          //       },
          //     },
          //   });

          //   return reorderLoadedData(ids, matches);
          return [];
        }
      );
    }

    return this._transactionLoader;
  }

  //   async createGame({
  //     localDateTime,
  //     utcDateTime,
  //     maximumPlayers,
  //     minimumPlayers,
  //     location,
  //     timezone,
  //     playerGroupId,
  //     userId,
  //     sport,
  //     offsetsInMinutes,
  //     isRecurringGame,
  //   }: CreateGameRequest) {
  //     const playerGroup = await prisma.playerGroup.findFirst({
  //       where: {
  //         id: playerGroupId,
  //         players: {
  //           some: {
  //             AND: {
  //               userId,
  //               isAdmin: true,
  //               isOwner: true,
  //             },
  //           },
  //         },
  //       },
  //     });

  //     if (playerGroup) {
  //       return this.create({
  //         timezone,
  //         localDateTime,
  //         offsetsInMinutes,
  //         utcDateTime,
  //         address: location,
  //         maximumPlayers,
  //         minimumPlayers,
  //         playerGroupId,
  //         sport,
  //         isRecurringGame,
  //       });
  //     } else {
  //       throw new Error("Bad stuff");
  //     }
  //   }

  async searchTransactions({
    limit = 20,
    offset = 0,
    fromDate,
    ...args
  }: {
    limit?: number;
    offset?: number;
    userId?: string;
    fromDate?: Date;
  }) {
    return {
      results: [],
      total: 0,
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

  //   async updateGame({
  //     id,
  //     localDateTime,
  //     utcDateTime,
  //     location,
  //   }: {
  //     id: string;
  //     localDateTime: string;
  //     utcDateTime: Date;
  //     location?: string;
  //   }) {
  //     return await prisma.game.update({
  //       where: {
  //         id,
  //       },
  //       data: {
  //         ...(localDateTime
  //           ? {
  //               localDateTime,
  //             }
  //           : null),
  //         ...(utcDateTime
  //           ? {
  //               utcDateTime,
  //             }
  //           : null),
  //         ...(location
  //           ? {
  //               address: location,
  //             }
  //           : null),
  //       },
  //     });
  //   }
}
