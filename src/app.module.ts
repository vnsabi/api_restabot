import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestabotModule } from './restabot/restabot.module';

@Module({
  imports: [RestabotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
