import { Test, TestingModule } from '@nestjs/testing';
import { RestabotService } from './restabot.service';

describe('RestabotService', () => {
  let service: RestabotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestabotService],
    }).compile();

    service = module.get<RestabotService>(RestabotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
