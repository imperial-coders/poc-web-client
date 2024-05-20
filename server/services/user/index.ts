import DataLoader from "dataloader";
import { User } from "./types";

export class UserService {
  private _userLoader?: DataLoader<string, User | null>;

  userLoader() {
    if (!this._userLoader) {
      this._userLoader = new DataLoader(async (ids: readonly string[]) => {
        return [];
        //   const url = new URL(`${TRANSACTIONS_URL}/transactions`);
        //   url.searchParams.append("ids", ids.join(","));
        //   return await get({ url: url.toString() });
      });
    }

    return this._userLoader;
  }
}
