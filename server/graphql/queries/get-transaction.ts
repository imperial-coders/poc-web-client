import { idArg, nonNull, queryField } from "nexus";
import { Transaction } from "../types/transaction";

export const getTransaction = queryField("getTransaction", {
  type: Transaction,

  args: {
    id: nonNull(idArg()),
  },

  async resolve(_root, { id }, ctx) {
    const service = ctx.transactionService();
    try {
      return await service.transactionLoader().load(id);
    } catch (err) {
      throw new Error(`transaction not found - ${id}`);
    }
  },
});
