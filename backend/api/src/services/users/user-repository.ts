import { Service } from 'typedi'
import User from '@/models/users/user'
import UserDao from '@/infrastructures/users/user-dao'
import UserDto from '@/infrastructures/users/user-dto'


@Service()
export default class UserRepository {

  constructor(
      private readonly userDao: UserDao) {
  }

  findAll(): User[] {
    return this.userDao.findAll()
      .map(userDto => this.dtoToModel(userDto))
  }

  findById(id: number): User | undefined {
    const userDto: UserDto | undefined = this.userDao.findById(id)
    if (userDto === undefined) {
      return undefined
    }
    return this.dtoToModel(userDto)
  }

  private dtoToModel(userDto: UserDto): User {
    return new User(
      userDto.id,
      userDto.code,
      userDto.role_id
    )
  }

}
