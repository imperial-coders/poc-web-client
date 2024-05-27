import { auth } from "@/auth";
import { Transactions } from "../../../../components/transactions";
import { Heading1 } from "@/components/@common/typography/heading";

export default async function TransactionsPage() {
  const session = await auth();
  return (
    <div className="grid gap-6">
      <Heading1>All your transactions</Heading1>
      <Transactions userId={session?.user?.id} />
    </div>
  );
}
