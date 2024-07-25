import express from 'express';
import { resolve } from 'path';

import { setupMongo } from './database';
import { errorHandler } from './middlewares/error-handler.middleware';
import { router } from './routes/routes';

import 'dotenv/config';

setupMongo().then(() => {
  const app = express();

  const port = process.env.PORT;

  app.use(express.json());
  app.use('/post-image', express.static(resolve(__dirname, '..', 'assets')));

  app.use(router);
  app.use(errorHandler);

  app.listen(port || 3001, () => {
    console.log(`Server has started in port ${port}.`);
  });
});
