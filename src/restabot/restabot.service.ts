import { Injectable } from '@nestjs/common';
import { referenceData } from './reference/data';

@Injectable()
export class RestabotService {

  getData(message: string) {
    let lowerCaseMessage = message.toLowerCase();
    const data = referenceData.intents;
    for(let obj of data) {
      let inputs = obj.inputs;
      let response = obj.responses[0];
      console.log(lowerCaseMessage, "LOWER CASE")
      if(inputs.includes(lowerCaseMessage)) {
        return { cnt: response };
      }
    }
  }

}
