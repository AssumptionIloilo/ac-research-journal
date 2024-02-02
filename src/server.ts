import next from 'next';
// import nextBuild from 'next/dist/build';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

import express from 'express';
import payload from 'payload';

import { seed } from './seed';

const app = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.NEXT_HOSTNAME || '127.0.0.1';

const start = async (): Promise<void> => {
  await payload.init({
    express: app,
    secret: process.env.PAYLOAD_SECRET || '',
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  if (process.env.PAYLOAD_SEED === 'true') {
    payload.logger.info('---- SEEDING DATABASE ----');
    await seed(payload);
  }

  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
    hostname: HOSTNAME,
    port: PORT as number,
  });

  const nextHandler = nextApp.getRequestHandler();

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info('Next.js started');

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`,
      );
    });
  });
};

start();
