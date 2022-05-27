import { Module } from '@nestjs/common';
import { RestabotController } from './restabot.controller';
import { RestabotService } from './restabot.service';

@Module({
  controllers: [RestabotController],
  providers: [RestabotService]
})
export class RestabotModule {}
