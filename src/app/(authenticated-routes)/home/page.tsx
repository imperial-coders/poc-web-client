import { Heading1, Heading3 } from "@/components/@common/typography/heading";
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

  if (user) {
    return (
      <div className="grid gap-6">
        <Heading1>WEB BFF POC</Heading1>
        <Paragraph>
          All of this data was requested on the server and only plain HTML was
          passed down to the client for this entire page!
        </Paragraph>
        <Paragraph>
          This is mocked user data. Your auth is real, but the session is mapped
          to a random preset user ID. So logging in and out is real, but all the
          data is mocked. Couldn&apos;t spend forever on this damn thing.
          Refreshing will update the random session ID to one of 3 user ids.
        </Paragraph>

        <Heading3>User</Heading3>
        <Paragraph>{`${user.firstName} ${user.lastName}`}</Paragraph>
        <Paragraph>{user.email}</Paragraph>
        <Paragraph>{`Your favorite Star Wars character: ${user.userSettings.favoriteStarWarsCharacter?.name ?? "NA"}`}</Paragraph>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <Heading1>WEB BFF POC</Heading1>
      <Paragraph>Something broke</Paragraph>
    </div>
  );
}
