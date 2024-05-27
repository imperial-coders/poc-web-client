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

    // async pageInfoFromNodes(nodes, args, ctx, info) {
    //   console.log("🚀 ~ nodes:", nodes);
    //   const nextPageResults = await ctx
    //     .transactionService()
    //     .searchTransactionsConnections({
    //       ...args,
    //       userId: args.userId ?? undefined,
    //       after: nodes[nodes.length - 1]?.id,
    //     });
    //   console.log("🚀 ~ results:", nextPageResults);
    //   const previousPageResults = await ctx
    //     .transactionService()
    //     .searchTransactionsConnections({
    //       ...args,
    //       userId: args.userId ?? undefined,
    //       before: nodes[0]?.id,
    //     });
    //   console.log("🚀 ~ previousPageResults:", previousPageResults);

    //   return {
    //     hasNextPage: nextPageResults.edges.length > 0,
    //     hasPreviousPage: previousPageResults.edges.length > 0,
    //   };
    // },

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
