import { objectType } from "nexus";
import { fsPathJoin } from "../../lib/path";

export const StarWarsCharacter = objectType({
  name: "StarWarsCharacter",

  sourceType: {
    module: fsPathJoin(
      "src",
      "server",
      "services",
      "star-wars-character",
      "types.ts"
    ),
    export: "StarWarsCharacter",
  },

  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("name");
  },
});
