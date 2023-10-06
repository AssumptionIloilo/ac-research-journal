import dotenv from 'dotenv';
import path from 'path';
import Logo from './components/cms/Logo/Logo';
import Icon from './components/cms/Icon/Icon';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

import { buildConfig } from 'payload/config';
import collections from './collections';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  admin: {
    meta: {
      titleSuffix: ' - Transformateur Admin',
      favicon: '/assumption-logo.svg',
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },
  collections: collections,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
