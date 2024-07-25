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
}
