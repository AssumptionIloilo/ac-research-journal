/* eslint-disable simple-import-sort/imports */
/** @eslint-ignore file */
import dotenv from 'dotenv';
import path from 'path';
import Logo from './components/cms/Logo/Logo';
import Icon from './components/cms/Icon/Icon';

// Payload 2.0
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { viteBundler } from '@payloadcms/bundler-vite';
import { slateEditor } from '@payloadcms/richtext-slate';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

import { buildConfig } from 'payload/config';
import collections from './collections';
import Avatar from './components/cms/Avatar/Avatar';
import EditorialBoard from './collections/management/EditorialBoard';

export default buildConfig({
  editor: slateEditor({}),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  admin: {
    meta: {
      titleSuffix: ' - AC Publications Admin',
      favicon: '/assumption-logo.svg',
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
    avatar: Avatar,
    bundler: viteBundler(),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  collections: collections,
  globals: [EditorialBoard],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
