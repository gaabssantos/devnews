import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { FormData, postSchema } from '../dtos/post.dto';
import { AppError } from '../errors/app.error';

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

const validateForm = (
  req: MulterRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const formData: FormData = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      image: req.file as Express.Multer.File,
    };

    postSchema.parse(formData);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new AppError(StatusCodes.BAD_REQUEST, error.errors);
    } else {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
};

export default validateForm;
