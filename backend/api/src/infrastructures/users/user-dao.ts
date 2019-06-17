import { Service } from 'typedi'
import InMemoryDatabase from '@/infrastructures/inmemory-database'
import UserDto from '@/infrastructures/users/user-dto'


@Service()
export default class UserDao {

  private users: UserDto[]

  constructor(
      private inmemoryDatabase: InMemoryDatabase) {
    this.users = inmemoryDatabase.users
  }

  findAll(): UserDto[] {
    return this.users.slice()
  }

  findById(id: number): UserDto | undefined {
    return this.users.find(c => c.id === id)
  }

}
