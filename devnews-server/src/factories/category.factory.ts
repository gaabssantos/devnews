import { CategoryRepository } from '../database/repositories/category.repository';
import { CategoryModel } from '../database/schemas/category.schema';
import { CategoryService } from '../services/category.service';

export class CategoryFactory {
  private static postService: CategoryService;

  static getServiceInstance() {
    if (this.postService) {
      return this.postService;
    }

    const repository = new CategoryRepository(CategoryModel);
    const service = new CategoryService(repository);

    this.postService = service;

    return service;
  }
}
