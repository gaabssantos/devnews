import cors from 'cors';
import express from 'express';

import { setupMongo } from './database';
import { errorHandler } from './middlewares/error-handler.middleware';
import { router } from './routes/routes';

import 'dotenv/config';

setupMongo().then(() => {
  const app = express();

  const port = process.env.PORT;

  app.use(cors({ origin: process.env.BASE_URL }));
  app.use(express.json());

  app.use(router);
  app.use(errorHandler);

  app.listen(port || 3001, () => {
    console.log(`Server has started in port ${port}.`);
  });
});
