import { PostEntity } from '../../entities/post.entity';
import { PostModel } from '../schemas/post.schema';

export class PostRepository {
  constructor(private postModel: typeof PostModel) {}

  create = async ({
    title,
    content,
    image,
    category,
  }: PostEntity): Promise<PostEntity> => {
    const postCreated = await this.postModel.create({
      title,
      content,
      image,
      category,
    });

    return postCreated.toObject<PostEntity>();
  };

  findByCategory = async (category: string): Promise<PostEntity[]> => {
    const posts = await this.postModel.find({ category });

    const postsMap = posts.map((item) => item.toObject<PostEntity>());

    return postsMap;
  };
}
