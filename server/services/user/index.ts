import DataLoader from "dataloader";
import * as grpc from "@grpc/grpc-js";
import * as protos from "../../protos/user";

const SERVICE_USERS_DATA_GRPC_HOST = process.env.SERVICE_USERS_GRPC_HOST;
const SERVICE_USERS_DATA_GRPC_SSL = process.env.SERVICE_USERS_GRPC_SSL;

export class UserService {
  private _userLoader?: DataLoader<string, protos.User | null>;
  private _client?: protos.UserServiceClient;

  constructor() {
    this._client = new protos.UserServiceClient(
      SERVICE_USERS_DATA_GRPC_HOST || "",
      SERVICE_USERS_DATA_GRPC_SSL === "Y"
        ? grpc.ChannelCredentials.createSsl()
        : grpc.ChannelCredentials.createInsecure()
    );
  }

  userLoader() {
    if (!this._userLoader) {
      this._userLoader = new DataLoader((ids: readonly string[]) => {
        const req = protos.GetUsersRequest.fromJSON({ ids });
        return new Promise((resolve, reject) => {
          this._client?.getUsers(req, (err, data) => {
            if (err) {
              return reject(err);
            }
            resolve(data.results.map((user) => user ?? null));
          });
        });
      });
    }

    return this._userLoader;
  }
}
