import { JsonController, Get } from 'routing-controllers'

@JsonController()
export default class IndexController {

  @Get('/user')
  user() {
    return 'This is user Controller';
  }

}