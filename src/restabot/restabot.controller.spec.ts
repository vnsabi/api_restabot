import { Test, TestingModule } from '@nestjs/testing';
import { RestabotController } from './restabot.controller';

describe('RestabotController', () => {
  let controller: RestabotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestabotController],
    }).compile();

    controller = module.get<RestabotController>(RestabotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
