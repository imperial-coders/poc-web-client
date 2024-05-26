import { Heading1 } from "@/components/@common/typography/heading";
import { Paragraph } from "@/components/@common/typography/paragraph";
import { getServerSideApolloClient } from "@/utils/server-side-apollo-client";
import { HOME_QUERY } from "./data";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/sign-in");
  }

  const client = getServerSideApolloClient();
  const response = await client.query({
    query: HOME_QUERY,
    variables: {
      userId: session.user.id,
    },
  });

  const user = response.data.getUser;
  console.log("🚀 ~ user:", user);

  return (
    <div className="grid gap-6">
      <Heading1>WEB BFF POC</Heading1>
      <Paragraph>Do stuff here</Paragraph>
    </div>
  );
}
