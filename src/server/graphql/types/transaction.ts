import { objectType } from "nexus";
import { fsPathJoin } from "../../lib/path";
import { User } from "./user";

export const Transaction = objectType({
  name: "Transaction",

  sourceType: {
    module: fsPathJoin("src", "server", "services", "transaction", "types.ts"),
    export: "Transaction",
  },

  definition(t) {
    t.nonNull.id("id");
    t.nonNull.int("amountInCents");
    t.string("summary");
    t.string("merchant");
    t.dateTime("transactionDate");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");

    t.field("user", {
      type: User,
      resolve: async (root, _args, ctx) => {
        const service = ctx.userService();
        return await service.userLoader().load(root.userId);
      },
    });
  },
});
