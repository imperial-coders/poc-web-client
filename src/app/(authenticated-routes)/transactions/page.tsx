import { auth } from "@/auth";
import { TransactionsTable } from "./_user-transactions-table";
import { Heading1 } from "@/components/@common/typography/heading";

export default async function TransactionsPage() {
  const session = await auth();
  return (
    <div className="grid gap-6">
      <Heading1>All your transactions</Heading1>
      <TransactionsTable userId={session?.user?.id} />
    </div>
  );
}
