import { CategoryEntity } from '../../entities/category.entity';
import { CategoryModel } from '../schemas/category.schema';

export class CategoryRepository {
  constructor(private categoryModel: typeof CategoryModel) {}

  create = async ({ name }: CategoryEntity): Promise<CategoryEntity> => {
    const categoryCreated = await this.categoryModel.create({ name });

    return categoryCreated.toObject<CategoryEntity>();
  };

  findByName = async (name: string): Promise<CategoryEntity | undefined> => {
    const category = await this.categoryModel.findOne({ name });

    return category?.toObject<CategoryEntity>();
  };

  index = async (): Promise<CategoryEntity[]> => {
    const categories = await this.categoryModel.find();

    const categoriesMap = categories.map((item) =>
      item.toObject<CategoryEntity>(),
    );

    return categoriesMap;
  };
}
