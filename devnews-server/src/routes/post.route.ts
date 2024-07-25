import { Router } from 'express';

import { PostController } from '../controllers/post.controller';
import { postSchema } from '../dtos/post.dto';
import { PostFactory } from '../factories/post.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const postRoute = Router();

const postController = new PostController(PostFactory.getServiceInstance());

postRoute.post(
  '/',
  validator({ schema: postSchema, type: ParamsType.BODY }),
  postController.create,
);
