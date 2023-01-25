import 'reflect-metadata';
import { injectable } from 'inversify';
import { Logger } from '../interfaces/logger';

@injectable()
export class ConsoleLogger extends Logger {
  public log = async (message: string) => {
    console.log(`MSG: [${this.getTime()}]: ${message}`);
  };
  public error = async (err: any) => {
    if (err instanceof Error) {
      console.log(`ERR: [${this.getTime()}]: ${err.message}`);
      console.log(`STACK: ${err.stack}`);
    } else {
      console.log(`ERR: [${this.getTime()}]: ${err}`);
    }
  };
  private getTime(): string {
    return new Date().toLocaleTimeString();
  }
}
