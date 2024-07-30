import { StatusCodes } from 'http-status-codes';

import { CategoryRepository } from '../database/repositories/category.repository';
import { PostRepository } from '../database/repositories/post.repository';
import { CategoryModel } from '../database/schemas/category.schema';
import { PostDTO } from '../dtos/post.dto';
import { PostEntity } from '../entities/post.entity';
import { AppError } from '../errors/app.error';

export class PostService {
  constructor(private postRepository: PostRepository) {}

  create = async ({ title, content, image, category }: PostDTO) => {
    const categoryRepository = new CategoryRepository(CategoryModel);
    const foundCategory = await categoryRepository.findByName(category);

    if (!foundCategory) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'category_not_exists');
    }

    const post = new PostEntity({
      title,
      content,
      image,
      category: foundCategory,
    });

    const postCreated = await this.postRepository.create(post);

    return postCreated;
  };

  findByCategory = async (category: string) => {
    const posts = await this.postRepository.findByCategory(category);

    return posts;
  };
}
