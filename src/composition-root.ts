import { Container } from 'inversify';
import { AppController } from './app/app-controller';
import { AppService } from './app/app-service';
import { App } from './app';
import { Logger } from './interfaces/logger';
import { ConsoleLogger } from './common/console-logger';
import { ErrorHandler } from './common/error-handler';

export class CompositionRoot {
  private readonly container = new Container({ defaultScope: 'Singleton' });

  constructor() {
    this.container.bind<Logger>(Logger).to(ConsoleLogger);
    this.container.bind<ErrorHandler>(ErrorHandler).toSelf();
    this.container.bind<AppController>(AppController).toSelf();
    this.container.bind<AppService>(AppService).toSelf();
    this.container.bind<App>(App).toSelf();
  }

  public getApp(): App {
    return this.container.resolve(App);
  }
  public getErrorHandler(): ErrorHandler {
    return this.container.resolve(ErrorHandler);
  }
}
