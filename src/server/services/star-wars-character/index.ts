import { StarWarsCharacter } from "./types";

export class StarWarsCharacterService {
  async getStarWarsCharacter({
    id,
  }: {
    id: string;
  }): Promise<StarWarsCharacter> {
    console.log("🚀 ~ id:", id);
    // TODO => ZOD
    const response = await fetch(`https://swapi.dev/api/people/${id}`, {
      headers: {
        accept: "application/json",
      },
    });
    const responseJson = await response.json();

    // @ts-ignore TODO => ZOD this return type from SWAPI
    if (responseJson && responseJson.name) {
      // @ts-ignore TODO => ZOD this return type from SWAPI
      return { id: id, name: responseJson.name };
    }

    return Promise.reject("Failed to find character");
  }
}
