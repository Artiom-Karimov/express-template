import { Router } from 'express';
import { injectable } from 'inversify';

@injectable()
export abstract class Controller {
  protected readonly router = Router();
  public getRouter(): Router {
    return this.router;
  }
}
