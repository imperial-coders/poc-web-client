import { auth } from "@/auth";
import { Transactions } from "../../../../components/transactions";

export default async function TransactionsPage() {
  const session = await auth();
  return <Transactions userId={session?.user.id} />;
}
