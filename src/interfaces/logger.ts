import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export abstract class Logger {
  public abstract log(message: string): Promise<void>;
  public abstract error(err: any): Promise<void>;
}
