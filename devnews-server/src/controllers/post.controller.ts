import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import cloudinary from '../config/cloudinary.config';
import { UserRepository } from '../database/repositories/user.respository';
import { UserModel } from '../database/schemas/user.schema';
import { AppError } from '../errors/app.error';
import { MyUserRequest } from '../middlewares/auth.middleware';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

export class PostController {
  constructor(private postService: PostService) {}

  create = async (req: MyUserRequest, res: Response, next: NextFunction) => {
    try {
      // const { filename: image } = req.file.path;
      const { title, content, category } = req.body;
      let image = '';

      const userRepository = new UserRepository(UserModel);
      const userService = new UserService(userRepository);

      const userEmail = req.userEmail;
      const userFound = await userService.findByEmail(userEmail as string);

      if (userFound?.role !== 'editor') {
        throw new AppError(StatusCodes.UNAUTHORIZED, 'user_is_not_a_editor');
      }

      if (req.file) {
        await cloudinary.uploader.upload(req?.file.path, (err, result) => {
          if (err) {
            console.log(err);
            throw new AppError(
              StatusCodes.INTERNAL_SERVER_ERROR,
              'cloudinary_error',
            );
          }

          image = result?.url as string;
        });
      }

      const postCreated = await this.postService.create({
        title,
        content,
        category,
        image,
      });

      return res.status(StatusCodes.CREATED).json(postCreated);
    } catch (err) {
      next(err);
    }
  };
}
