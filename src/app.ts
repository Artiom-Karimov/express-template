import 'reflect-metadata';
import { Server, createServer } from 'http';
import cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { injectable } from 'inversify';
import * as express from 'express';
import { AppController } from './app/app-controller';
import { config } from './common/config';

@injectable()
export class App {
  public readonly port: number;
  public readonly server: Server;

  constructor(appController: AppController) {
    this.port = config.port;

    const app = express();
    this.server = createServer(app);

    if (config.useCors) app.use(cors());
    if (config.trustProxy) app.set('trust proxy', true);
    app.use(express.json());
    app.use(cookieParser());

    app.use('/', appController.getRouter());
  }

  public start() {
    this.server.listen(this.port, () => {
      console.log(`Listenning on port ${this.port}`);
    });
  }
  public stop() {
    this.server.close();
  }
}
