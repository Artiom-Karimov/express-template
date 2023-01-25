import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class AppService {
  public async get(): Promise<string> {
    return Promise.resolve(`Hello there!`);
  }
}
