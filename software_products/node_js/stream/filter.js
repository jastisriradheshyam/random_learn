import { Readable } from "node:stream";
import { Resolver } from "node:dns/promises";

for await (const chunk of Readable.from([1, 2, 3, 4]).filter((x) => x > 2)) {
  console.log(chunk);
}

const resolver = new Resolver();
const dnsResults = Readable.from([
  'nodejs.org',
  'www.nodeconf.eu',
  'fusebit.io',
]).filter(async (domain) => {
  const resolvedInfo = await resolver.resolve4(domain, { ttl: true });
  return resolvedInfo.ttl > 60;
}, { concurrency: 2 });

for await (const result of dnsResults) {
  console.log(result);
}