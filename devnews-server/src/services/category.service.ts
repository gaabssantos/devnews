import { StatusCodes } from 'http-status-codes';

import { CategoryRepository } from '../database/repositories/category.repository';
import { CategoryDTO } from '../dtos/category.dto';
import { CategoryEntity } from '../entities/category.entity';
import { AppError } from '../errors/app.error';

export class CategoryService {
  constructor(private categoryRespository: CategoryRepository) {}

  create = async ({ name }: CategoryDTO) => {
    const foundCategory = await this.categoryRespository.findByName(name);

    if (foundCategory) {
      throw new AppError(StatusCodes.CONFLICT, 'category_exists');
    }

    const category = new CategoryEntity({ name });

    const categoryCreated = await this.categoryRespository.create(category);

    return categoryCreated;
  };

  index = async (): Promise<CategoryEntity[]> => {
    const categories = await this.categoryRespository.index();

    return categories;
  };
}
