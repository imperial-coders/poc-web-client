import { idArg, queryField } from "nexus";
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
        .transactionService()
        .searchTransactionsConnections({ ...args, userId });

      return results.pageInfo.total;
    },

    async nodes(_root, { userId, ...args }, ctx) {
      const results = await ctx
        .transactionService()
        .searchTransactionsConnections({
          ...args,
          userId: userId ?? undefined,
        });

      return results.edges.map((edge) => edge.node);
    },
  });
});
