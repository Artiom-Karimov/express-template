import { Container } from 'inversify';
import { AppController } from './app/app-controller';
import { AppService } from './app/app-service';
import { App } from './app';

export class CompositionRoot {
  private readonly container = new Container({ defaultScope: 'Singleton' });

  constructor() {
    this.container.bind<AppController>(AppController).toSelf();
    this.container.bind<AppService>(AppService).toSelf();
    this.container.bind<App>(App).toSelf();
  }

  public getApp(): App {
    return this.container.resolve(App);
  }
}
