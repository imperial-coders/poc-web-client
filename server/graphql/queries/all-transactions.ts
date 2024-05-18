import { arg, idArg, queryField, stringArg } from "nexus";
import { Transaction } from "../types/transaction";

export const allTransactions = queryField((t) => {
  t.connectionField("allTransactions", {
    type: Transaction,
    additionalArgs: {
      userId: idArg(),
    },

    totalCount: async (
      _root,
      // @ts-ignore => not sure why this doesn't recognize the additional args
      { userId, keywords, visibility, ...args },
      ctx
    ) => {
      const results = await ctx
        .playerGroupService()
        .searchPlayersGroupsConnections({
          ...args,
          userId: userId ?? undefined,
          keywords: keywords ?? undefined,
          visibility: visibility ?? undefined,
        });

      return results.edges.length;
    },

    async nodes(_root, { userId, keywords, visibility, ...args }, ctx) {
      const results = await ctx
        .playerGroupService()
        .searchPlayersGroupsConnections({
          ...args,
          userId: userId ?? undefined,
          keywords: keywords ?? undefined,
          visibility: visibility ?? undefined,
        });

      return results.edges.map((edge) => edge.node);
    },
  });
});
