import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { UserService } from '../services/user.service';

export class UserController {
  constructor(private userService: UserService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, role, password } = req.body;

      const userFound = await this.userService.findByEmail(email);

      if (userFound) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ error: 'user_already_exists' });
      }

      const userCreated = await this.userService.create({
        name,
        email,
        role,
        password,
      });

      return res.status(StatusCodes.CREATED).json(userCreated);
    } catch (err) {
      next(err);
    }
  };
}
