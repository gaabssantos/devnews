import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CategoryService } from '../services/category.service';

export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;

      const categoryCreated = await this.categoryService.create({ name });

      return res.status(StatusCodes.CREATED).json(categoryCreated);
    } catch (err) {
      next(err);
    }
  };
}
