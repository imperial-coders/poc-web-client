import { idArg, nonNull, queryField } from "nexus";
import { User } from "../types/user";

export const getUser = queryField("getUser", {
  type: User,

  args: {
    id: nonNull(idArg()),
  },

  async resolve(_root, { id }, ctx) {
    const service = ctx.userService();
    try {
      return await service.userLoader().load(id);
    } catch (err) {
      throw new Error(`user not found - ${id}`);
    }
  },
});
