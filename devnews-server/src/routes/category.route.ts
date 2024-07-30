import { Router } from 'express';

import { CategoryController } from '../controllers/category.controller';
import { CategoryFactory } from '../factories/category.factory';

export const categoryRoute = Router();

const categoryController = new CategoryController(
  CategoryFactory.getServiceInstance(),
);

categoryRoute.post('/', categoryController.create);
