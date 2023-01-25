import { AppService } from './app-service';

describe('app service unit tests', () => {
  it('get without parameters', async () => {
    const result = await new AppService().get();
    expect(result).toBe(`Hello there!`);
  });
});
