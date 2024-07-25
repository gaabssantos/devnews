import { PostRepository } from '../database/repositories/post.repository';
import { PostModel } from '../database/schemas/post.schema';
import { PostService } from '../services/post.service';

export class PostFactory {
  private static postService: PostService;

  static getServiceInstance() {
    if (this.postService) {
      return this.postService;
    }

    const repository = new PostRepository(PostModel);
    const service = new PostService(repository);

    this.postService = service;

    return service;
  }
}
