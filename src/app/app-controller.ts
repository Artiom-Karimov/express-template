import 'reflect-metadata';
import { injectable } from 'inversify';
import { Controller } from '../interfaces/controller';
import { AppService } from './app-service';
import { Request, Response } from 'express';

@injectable()
export class AppController extends Controller {
  constructor(private readonly service: AppService) {
    super();
    this.setRoutes();
  }

  private setRoutes() {
    this.router.get('/', async (req: Request, res: Response) => {
      const result = await this.service.get();
      res.send(result);
    });
  }
}
