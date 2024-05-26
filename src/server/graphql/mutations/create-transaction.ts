import { idArg, intArg, mutationField, nonNull, stringArg } from "nexus";

export const createTransaction = mutationField("createTransaction", {
  type: "Boolean",

  args: {
    userId: nonNull(idArg()),
    merchant: stringArg(),
    amountInCents: nonNull(intArg()),
    summary: stringArg(),
    date: stringArg(),
  },

  async resolve(_, { userId, merchant, amountInCents, summary, date }, ctx) {
    const service = ctx.transactionService();
    try {
      await service.createTransaction({
        userId,
        merchant,
        amountInCents,
        summary,
        date,
      });
      return true;
    } catch (err) {
      console.log("error", err);
      return false;
    }
  },
});
