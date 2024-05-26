import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { schema } from "../../../../apollo/schema";
import { HttpContext } from "../../../server/context";

const server = new ApolloServer({
  schema,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  // @ts-ignore - Adding the userId messes up the types
  context: async (req, res) => await HttpContext.init(req, res),
});

export { handler as GET, handler as POST };
