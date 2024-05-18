export interface Transaction {
  id: string;
  userId: string;
  amountInCents: number;
  summary?: string;
  transactionDate: Date;
  merchant?: string;
  createdAt: Date;
  updatedAt: Date;
}
