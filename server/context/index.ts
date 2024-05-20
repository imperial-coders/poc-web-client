import { IncomingMessage, ServerResponse } from "http";
import { TransactionService } from "../services/transaction";
import { UserService } from "../services/user";

export class HttpContext {
  _req: IncomingMessage;
  _res: ServerResponse;

  _transactionService?: TransactionService;
  _userService?: UserService;

  userId: string = "";

  static async init(req: IncomingMessage, res: ServerResponse) {
    // @ts-ignore - How to type a userId on the request??
    return new HttpContext(req, res, req.userId);
  }

  private constructor(
    req: IncomingMessage,
    res: ServerResponse,
    userId: string
  ) {
    this._req = req;
    this._res = res;
    this.userId = userId;
  }

  transactionService() {
    if (!this._transactionService) {
      this._transactionService = new TransactionService();
    }

    return this._transactionService;
  }

  userService() {
    if (!this._userService) {
      this._userService = new UserService();
    }

    return this._userService;
  }
}
