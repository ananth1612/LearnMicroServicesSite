import { MicroservicesModule } from './microservices.module';

describe('MicroservicesModule', () => {
  let microservicesModule: MicroservicesModule;

  beforeEach(() => {
    microservicesModule = new MicroservicesModule();
  });

  it('should create an instance', () => {
    expect(microservicesModule).toBeTruthy();
  });
});
