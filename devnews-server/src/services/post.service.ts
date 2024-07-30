import { PostRepository } from '../database/repositories/post.repository';
import { PostDTO } from '../dtos/post.dto';
import { PostEntity } from '../entities/post.entity';

export class PostService {
  constructor(private postRepository: PostRepository) {}

  create = async ({ title, content, image, category }: PostDTO) => {
    const post = new PostEntity({
      title,
      content,
      image,
      category,
    });

    const postCreated = await this.postRepository.create(post);

    return postCreated;
  };

  findByCategory = async (category: string) => {
    const posts = await this.postRepository.findByCategory(category);

    return posts;
  };
}
