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

    //     userId: string;
    //   amountInCents: number;
    //   summary?: string;
    //   transactionDate: Date;
    //   merchant?: string;
    //   createdAt: Date;
    //   updatedAt: Date;
  },
});
