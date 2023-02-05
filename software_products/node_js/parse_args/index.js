import { parseArgs } from 'node:util';

const options = {
  'name': { type: 'string' },
  'goodWithNode': { type: 'boolean' }
};

const { values } = parseArgs({ options });

// Invocation node index.js --name=done --goodWithNode
// Output: `[Object: null prototype] { name: 'done', goodWithNode: true }`
console.log(values);