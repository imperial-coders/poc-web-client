import { asNexusMethod } from "nexus";
import { DateTimeResolver } from "graphql-scalars";

export const GraphqlDateTime = asNexusMethod(DateTimeResolver, "dateTime");
