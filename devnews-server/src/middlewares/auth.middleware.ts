import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { AppError } from '../errors/app.error';

export interface MyUserRequest extends Request {
  userId?: string;
  userEmail?: string;
}

interface IJWTPayload extends JwtPayload {
  id: string;
  email: string;
}

export default (req: MyUserRequest, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;
  const authSecret = process.env.JWT_SECRET;

  if (!authToken)
    throw new AppError(StatusCodes.UNAUTHORIZED, 'token_not_provied');

  const token = authToken.split(' ')[1];

  try {
    const decoded = jwt.verify(token, authSecret as string) as IJWTPayload;

    req.userId = decoded.id;
    req.userEmail = decoded.email;

    return next();
  } catch (err) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'token_is_invalid');
  }
};
