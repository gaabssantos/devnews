import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { AppError } from '../errors/app.error';
import { UserService } from '../services/user.service';

export class UserSessionController {
  constructor(private userService: UserService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const userFound = await this.userService.findByEmail(email);

      if (!userFound) {
        throw new AppError(
          StatusCodes.UNAUTHORIZED,
          'email_or_password_incorrect',
        );
      }

      const passwordHashed = await bcrypt.compare(password, userFound.password);

      if (!passwordHashed) {
        throw new AppError(
          StatusCodes.UNAUTHORIZED,
          'email_or_password_incorrect',
        );
      }

      const token = jwt.sign(
        { id: userFound._id, email: userFound.email },
        process.env.JWT_SECRET as string,
        { expiresIn: process.env.JWT_EXPIRES },
      );

      const userLogged = {
        name: userFound.name,
        email: userFound.email,
        role: userFound.role,
        token,
      };

      return res.status(StatusCodes.CREATED).json(userLogged);
    } catch (err) {
      next(err);
    }
  };
}
