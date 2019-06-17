import { JsonController, Get, Param } from 'routing-controllers'
import UserService from '@/services/users/user-service'


@JsonController('/users')
export default class MockUserController {

  constructor(
      private readonly userService: UserService) {
  }

  @Get()
  findAll() {
    return [
      { id: '987', name: 'mock1' },
      { id: '876', name: 'mock2' },
      { id: '765', name: 'mock3' },
    ]
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.userService.findById(id)
  }

}
