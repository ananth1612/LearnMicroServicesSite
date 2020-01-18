import { SpringbootModule } from './springboot.module';

describe('SpringbootModule', () => {
  let springbootModule: SpringbootModule;

  beforeEach(() => {
    springbootModule = new SpringbootModule();
  });

  it('should create an instance', () => {
    expect(springbootModule).toBeTruthy();
  });
});
