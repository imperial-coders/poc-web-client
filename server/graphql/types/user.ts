import { objectType } from "nexus";
import { fsPathJoin } from "../../lib/path";

export const User = objectType({
  name: "User",

  sourceType: {
    module: fsPathJoin("server", "services", "user", "types.ts"),
    export: "User",
  },

  definition(t) {
    t.nonNull.id("id");
  },
});
