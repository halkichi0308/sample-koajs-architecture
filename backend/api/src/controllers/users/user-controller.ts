import { JsonController, Get, Param } from 'routing-controllers'
import UserService from '@/services/users/user-service'


@JsonController('/users')
export default class UserController {

  constructor(
      private readonly userService: UserService) {
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.userService.findById(id)
  }

}
