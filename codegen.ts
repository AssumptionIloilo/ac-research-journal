import * as dotenv from 'dotenv';
dotenv.config();

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`,
  documents: ['src/**/*.tsx', 'src/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
