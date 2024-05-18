import DataLoader from "dataloader";
import { Transaction } from "./types";
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

  async searchGames({
    limit = 20,
    offset = 0,
    fromDate,
    ...args
  }: {
    limit?: number;
    offset?: number;
    playerGroupId?: string;
    fromDate?: Date;
  }) {
    const where = {
      playerGroupId: args.playerGroupId,
      ...(!!fromDate
        ? {
            utcDateTime: {
              gte: new Date(fromDate.setHours(fromDate.getHours() - 2)),
            },
          }
        : null),
    };

    // const [results, total] = await Promise.all([
    //   prisma.game.findMany({
    //     take: limit,
    //     skip: offset,
    //     where,
    //     orderBy: {
    //       utcDateTime: "asc",
    //     },
    //   }),
    //   prisma.game.count({
    //     where,
    //   }),
    // ]);

    return {
      results: [],
      total: 0,
    };
  }

  //   async searchGamesConnections(args: SearchGameParams) {
  //     const { first, after, last, before, playerGroupId, fromDate } = args;

  //     const { limit, offset } = connectionUtils.parseArgs({
  //       first,
  //       after,
  //       last,
  //       before,
  //     });

  //     const response = await this.searchGames({
  //       playerGroupId,
  //       fromDate,
  //       limit,
  //       offset,
  //     });

  //     return connectionUtils.createConnection<Game>({
  //       total: response.total,
  //       nodes: response.results,
  //       offset,
  //     });
  //   }

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
