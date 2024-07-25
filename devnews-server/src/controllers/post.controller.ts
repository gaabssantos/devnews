import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { PostService } from '../services/post.service';

export class PostController {
  constructor(private postService: PostService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, content, image, category } = req.body;

      const postCreated = await this.postService.create({
        title,
        content,
        image,
        category,
      });

      return res.status(StatusCodes.CREATED).json(postCreated);
    } catch (err) {
      next(err);
    }
  };
}
