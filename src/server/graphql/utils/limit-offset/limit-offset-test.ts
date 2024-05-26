export {};

// import * as lib from ".";

// const nodes = [
//   { id: 1, item: "one" },
//   { id: 2, item: "two" },
//   { id: 3, item: "three" },
//   { id: 4, item: "four" },
//   { id: 5, item: "five" },
//   { id: 6, item: "six" },
//   { id: 7, item: "seven" },
//   { id: 8, item: "eight" },
//   { id: 9, item: "nine" },
//   { id: 10, item: "ten" },
//   { id: 11, item: "eleven" },
// ];

// describe("GraphQL Connections, Limit / Offset Utils", () => {
//   test("serializes & parsers number-based cursors", () => {
//     expect(lib.serializeCursor(20)).toBe("MjA=");
//     expect(lib.parseCursor("MjA=")).toBe(20);

//     Array.from({ length: 100 }, (_, i) => {
//       const number = i;
//       const cursor = lib.serializeCursor(number);
//       expect(lib.parseCursor(cursor)).toBe(number);
//     });
//   });

//   test("serializes list of nodes into edges", () => {
//     const edges = lib.createEdges({ nodes });
//     expect(edges.length).toBe(nodes.length);

//     const [first, second] = edges;
//     expect(lib.parseCursor(first.cursor)).toBe(0);
//     expect(lib.parseCursor(second.cursor)).toBe(1);

//     expect(edges[edges.length - 1].node).toEqual({ id: 11, item: "eleven" });
//   });

//   test("serializes list of nodes into edges with injected offset", () => {
//     const edges = lib.createEdges({ nodes, offset: 10 });
//     expect(edges.length).toBe(nodes.length);

//     const [first, second] = edges;
//     expect(lib.parseCursor(first.cursor)).toBe(0 + 10);
//     expect(lib.parseCursor(second.cursor)).toBe(1 + 10);

//     expect(edges[edges.length - 1].node).toEqual({ id: 11, item: "eleven" });
//   });

//   test("default connection args is first 20", () => {
//     expect(lib.parseArgs({})).toEqual({ limit: 20, offset: 0 });
//   });

//   test("connection args works with after", () => {
//     const tenCursor = lib.serializeCursor(10);
//     expect(lib.parseArgs({ first: 10, after: tenCursor })).toEqual({
//       limit: 10,
//       offset: 11,
//     });
//   });

//   test("connection args works with before", () => {
//     const tenCursor = lib.serializeCursor(10);
//     expect(lib.parseArgs({ last: 5, before: tenCursor })).toEqual({
//       limit: 5,
//       offset: 5,
//     });
//   });

//   test("connection args fixes invalid last/before ranges", () => {
//     const tenCursor = lib.serializeCursor(10);
//     expect(lib.parseArgs({ last: 20, before: tenCursor })).toEqual({
//       limit: 20,
//       offset: 0,
//     });
//   });
// });
