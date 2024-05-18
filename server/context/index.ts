import { IncomingMessage, ServerResponse } from "http";
import { TransactionService } from "../services/transaction";

export class HttpContext {
  _req: IncomingMessage;
  _res: ServerResponse;

  _transactionService?: TransactionService;

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
}
