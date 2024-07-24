import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AppError } from '../errors/app.error';
import { UserService } from '../services/user.service';

export class UserController {
  constructor(private userService: UserService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, role, password } = req.body;

      const userFound = await this.userService.findByEmail(email);

      if (userFound) {
        throw new AppError(StatusCodes.UNAUTHORIZED, 'user_already_exists');
      }

      const newPassword = await bcrypt.hash(password, 10);

      const userCreated = await this.userService.create({
        name,
        email,
        role,
        password: newPassword,
      });

      return res.status(StatusCodes.CREATED).json(userCreated);
    } catch (err) {
      next(err);
    }
  };
}
