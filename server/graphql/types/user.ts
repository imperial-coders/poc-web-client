import { objectType } from "nexus";
import { fsPathJoin } from "../../lib/path";

export const User = objectType({
  name: "User",

  sourceType: {
    module: fsPathJoin("server", "protos", "user.ts"),
    export: "User",
  },

  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.string("email");
    t.string("phoneNumber");
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
  },
});
