import User from '@/models/users/user'
import Role from '@/models/users/role'


export default class Lawyer extends User {

  constructor(
      id: number,
      code: string,
      role: Role,
      public readonly name: string,
      public readonly email: string) {
    super(id, code, role)
  }

}
