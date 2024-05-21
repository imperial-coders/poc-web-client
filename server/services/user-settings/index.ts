import DataLoader from "dataloader";
import * as grpc from "@grpc/grpc-js";
import * as protos from "../../protos/user-settings";

const SERVICE_USERS_SETTINGS_GRPC_HOST =
  process.env.SERVICE_USERS_SETTINGS_GRPC_HOST;
const SERVICE_USERS_SETTINGS_GRPC_SSL =
  process.env.SERVICE_USERS_SETTINGS_GRPC_SSL;

export class UserSettingsService {
  private _client?: protos.UserSettingsServiceClient;

  constructor() {
    this._client = new protos.UserSettingsServiceClient(
      SERVICE_USERS_SETTINGS_GRPC_HOST || "",
      SERVICE_USERS_SETTINGS_GRPC_SSL === "Y"
        ? grpc.ChannelCredentials.createSsl()
        : grpc.ChannelCredentials.createInsecure()
    );
  }

  async getUserSettingsByUserId({
    userId,
  }: {
    userId: string;
  }): Promise<protos.UserSettings | null | Error> {
    const req = protos.GetUserSettingsByUserIdRequest.fromJSON({ userId });
    return new Promise((resolve, reject) => {
      this._client?.getUserSettingsBuUserId(req, (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data ?? null);
      });
    });
  }
}
