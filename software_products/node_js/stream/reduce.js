import { Readable } from "node:stream";

const ten = await Readable.from([1, 2, 3, 4]).reduce((previous, data) => {
  return previous + data;
});

console.log(ten);