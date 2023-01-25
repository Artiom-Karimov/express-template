import 'reflect-metadata';
import { injectable } from 'inversify';
import { Logger } from '../interfaces/logger';

@injectable()
export class ErrorHandler {
  constructor(private readonly logger: Logger) { }

  public bindUncaught() {
    process.on('uncaughtException', (error: any) => this.handleError(error));
    process.on('unhandledRejection', (error: any) => this.handleError(error));
  }
  public handleError = (error: Error) => {
    this.logger.error(error);
  };
}
