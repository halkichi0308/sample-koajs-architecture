import { JsonController, Get } from 'routing-controllers'
import GreetingService from '@/services/greeting-service'


@JsonController()
export default class IndexController {

  constructor(
      private readonly greetingService: GreetingService) {
  }

  @Get('/')
  hello() {
    return this.greetingService.hello()
  }

  @Get('/goodbye')
  goodbye() {
    return this.greetingService.goodbye()
  }

}
