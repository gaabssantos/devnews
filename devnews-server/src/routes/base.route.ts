import { Router } from 'express';

import packageJson from '../../package.json';

export const baseRoute = Router();

baseRoute.use('/', (_, res) => {
  const { name, version, description, author } = packageJson;

  return res.status(200).json({ name, version, description, author });
});
