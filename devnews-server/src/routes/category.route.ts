import { Router } from 'express';

import { CategoryController } from '../controllers/category.controller';
import { CategoryFactory } from '../factories/category.factory';
import authMiddleware from '../middlewares/auth.middleware';

export const categoryRoute = Router();

const categoryController = new CategoryController(
  CategoryFactory.getServiceInstance(),
);

categoryRoute.get('/', categoryController.index);
categoryRoute.use(authMiddleware);
categoryRoute.post('/', categoryController.create);
