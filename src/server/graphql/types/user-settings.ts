import { objectType } from "nexus";
import { fsPathJoin } from "../../lib/path";
import { StarWarsCharacter } from "./star-wars-character";

export const UserSettings = objectType({
  name: "UserSettigs",

  sourceType: {
    module: fsPathJoin("src", "server", "protos", "user-settings.ts"),
    export: "UserSettings",
  },

  definition(t) {
    t.nonNull.id("id");
    t.field("favoriteStarWarsCharacter", {
      type: StarWarsCharacter,
      // @ts-ignore TODO fix this
      resolve: async (source, args, ctx) => {
        if (source.favoriteStarWarsCharacterSwapiId) {
          const character = await ctx
            .starWarsCharacterService()
            .getStarWarsCharacter({
              id: source.favoriteStarWarsCharacterSwapiId,
            });

          return character;
        }

        return null;
      },
    });

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
