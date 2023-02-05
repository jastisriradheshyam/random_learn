import { Readable } from "node:stream";
import { Resolver } from "node:dns/promises";

for await (const chunk of Readable.from([1, 2, 3, 4]).map((x) => x * 2)) {
  console.log(chunk);
}

const resolver = new Resolver();
const dnsResults = Readable.from([
  'nodejs.org',
  'www.nodeconf.eu',
  'fusebit.io',
]).map((domain) => resolver.resolve4(domain), { concurrency: 2 });

for await (const result of dnsResults) {
  console.log(result);
}