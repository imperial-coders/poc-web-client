import { idArg, nonNull, queryField } from "nexus";
import { Transaction } from "../types/transaction";

export const getTransaction = queryField("getTransaction", {
  type: Transaction,

  args: {
    id: nonNull(idArg()),
  },

  async resolve(_root, { id }, ctx) {
    console.log("CCCC", JSON.stringify(ctx, null, 2));
    const service = ctx.transactionService();
    console.log("XXXX", service);
    const transaction = await service.transactionLoader().load(id);
    if (!transaction) {
      throw new Error("transaction not found");
    }

    return transaction;
  },
});
