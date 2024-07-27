import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { PostService } from '../services/post.service';

export class PostController {
  constructor(private postService: PostService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(StatusCodes.CREATED).json({ msg: 'Hello!' });
    } catch (err) {
      next(err);
    }
  };
}
