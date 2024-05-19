import { objectType } from "nexus";
import { fsPathJoin } from "../../lib/path";

export const Transaction = objectType({
  name: "Transaction",

  sourceType: {
    module: fsPathJoin("server", "services", "transaction", "types.ts"),
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

    //     userId: string;
  },
});
