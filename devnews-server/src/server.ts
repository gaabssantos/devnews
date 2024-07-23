import express from 'express';

import { setupMongo } from './database';
import { router } from './routes/routes';

import 'dotenv/config';

setupMongo().then(() => {
  const app = express();
  app.use(express.json());

  const port = 3001;
  app.use(router);

  app.listen(port, () => {
    console.log(`Server has started in port ${port}.`);
  });
});
