import { asNexusMethod } from "nexus";
import { DateResolver } from "graphql-scalars";

export const GraphqlDate = asNexusMethod(DateResolver, "date");
