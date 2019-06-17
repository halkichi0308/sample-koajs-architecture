import { Service } from 'typedi'
import InMemoryDatabase from '@/infrastructures/inmemory-database'
import RoleDto from '@/infrastructures/users/role-dto'


@Service()
export default class RoleDao {

  private roles: RoleDto[]

  constructor(
      private inmemoryDatabase: InMemoryDatabase) {
    this.roles = inmemoryDatabase.roles
  }

  findAll(): RoleDto[] {
    return this.roles.slice()
  }

  findById(id: number): RoleDto | undefined {
    return this.roles.find(c => c.id === id)
  }

}
