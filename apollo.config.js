// Just add apollo.config.js in tsconfig 'include' and ESM imports will be fine.
// eslint-disable-next-line import/no-import-module-exports
import * as dotenv from 'dotenv';
dotenv.config();

// eslint-disable-next-line no-console
console.log(
  `🚀 Loaded Schema from ${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`,
);
module.exports = {
  client: {
    service: {
      name: 'ac-publications',
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`,
    },
  },
};
