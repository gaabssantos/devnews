import { Router } from 'express';
import multer from 'multer';

import { PostController } from '../controllers/post.controller';
import { PostFactory } from '../factories/post.factory';

export const postRoute = Router();

const postController = new PostController(PostFactory.getServiceInstance());

postRoute.post('/', postController.create);
