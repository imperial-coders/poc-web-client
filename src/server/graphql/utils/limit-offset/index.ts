export function serializeCursor(offset: number) {
  return Buffer.from(`${offset}`, "ascii").toString("base64");
}

export function parseCursor(cursor: string) {
  return Number(Buffer.from(`${cursor}`, "base64").toString("ascii"));
}

export function createEdge<T>(node: T, offset: number) {
  return {
    node,
    cursor: serializeCursor(offset),
  };
}

export function createPageInfo<T>({
  edges,
  total,
  offset = 0,
}: {
  edges: {
    node: T;
    cursor: string;
  }[];
  total: number;
  offset?: number;
}) {
  const hasPreviousPage = offset > 0;
  const hasNextPage = total > offset + edges.length;
  const endCursor = edges[edges.length - 1]?.cursor ?? null;
  const startCursor = edges[0]?.cursor ?? null;

  return {
    hasPreviousPage,
    hasNextPage,
    endCursor,
    startCursor,
    total,
  };
}

export function createEdges<T>({
  nodes,
  offset = 0,
}: {
  nodes: T[];
  offset?: number;
}) {
  return nodes.map((node, i) => createEdge(node, offset + i));
}

export function createConnection<T>({
  nodes,
  total,
  offset = 0,
}: {
  nodes: T[];
  total: number;
  offset?: number;
}) {
  const edges = createEdges({ nodes, offset });
  const pageInfo = createPageInfo({ edges, total, offset });

  return {
    pageInfo,
    edges,
  };
}

interface ConnectionArg {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}

export function parseArgs(args: ConnectionArg) {
  const limit = Number.isFinite(args.first)
    ? (args.first as number)
    : Number.isFinite(args.last)
    ? (args.last as number)
    : 20;

  const offset = args.before
    ? Math.max(0, parseCursor(args.before) - limit)
    : args.after
    ? parseCursor(args.after) + 1
    : 0;

  return { limit, offset };
}

type OffsetPaginationArgs = {
  limit?: number;
  offset?: number;
};

export type CursorifyPaginationArgs<T extends OffsetPaginationArgs> = Omit<
  T,
  "limit" | "offset"
> &
  ConnectionArg;
