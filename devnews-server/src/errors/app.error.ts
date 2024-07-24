import { StatusCodes } from 'http-status-codes';

export class AppError {
  public statusCode: StatusCodes;
  public error: string | string[];

  constructor(statusCodes: StatusCodes, error: string | string[]) {
    this.statusCode = statusCodes;
    this.error = error;
  }
}
