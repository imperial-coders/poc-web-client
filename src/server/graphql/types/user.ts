import { objectType } from "nexus";
import { fsPathJoin } from "../../lib/path";
import { UserSettings } from "./user-settings";
import { Transaction } from "./transaction";

export const User = objectType({
  name: "User",

  sourceType: {
    module: fsPathJoin("src", "server", "protos", "user.ts"),
    export: "User",
  },

  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.string("email");
    t.string("phoneNumber");
    t.nonNull.field("userSettings", {
      type: UserSettings,
      // @ts-ignore look at this later
      resolve: async (source, args, ctx) => {
        return await ctx
          .userSettingsService()
          .getUserSettingsByUserId({ userId: source.id });
      },
    });
    t.nonNull.dateTime("createdAt", {
      resolve: (source) => {
        return new Date(source.createdAt);
      },
    });
    t.nonNull.dateTime("updatedAt", {
      resolve: (source) => {
        return new Date(source.updatedAt);
      },
    });

    t.connectionField("transactions", {
      type: Transaction,

      totalCount: async (
        { id },
        // @ts-ignore => not sure why this doesn't recognize the additional args
        { keywords, visibility, ...args },
        ctx
      ) => {
        const results = await ctx
          .transactionService()
          .searchTransactionsConnections({ ...args, userId: id });

        return results.pageInfo.total;
      },

      async nodes({ id }, { ...args }, ctx) {
        const results = await ctx
          .transactionService()
          .searchTransactionsConnections({
            ...args,
            userId: id ?? undefined,
          });

        return results.edges.map((edge) => edge.node);
      },
    });
  },
});
