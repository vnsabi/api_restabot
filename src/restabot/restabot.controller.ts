import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { GetMessageDto } from './dto/getMessage.dto';
import { RestabotService } from './restabot.service';

@Controller('restabot')
export class RestabotController {

  constructor(
    private restabotService: RestabotService
  ) {}

  @Get('data')
  getData(@Query() query: GetMessageDto) {
    if(!query.message) {
      throw new BadRequestException();
    }
    console.log(query)
    return this.restabotService.getData(query.message);
  }

}
