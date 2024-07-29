import { StatusCodes } from 'http-status-codes';
import { ZodIssue } from 'zod';

export class AppError {
  public statusCode: StatusCodes;
  public error: string | string[] | ZodIssue[];

  constructor(statusCodes: StatusCodes, error: string | string[] | ZodIssue[]) {
    this.statusCode = statusCodes;
    this.error = error;
  }
}
