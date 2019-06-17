import { Service } from 'typedi'
import UserRepository from './user-repository'


@Service()
export default class MockUserRepository {

  constructor() {
  }

  findAll() {
    return []
  }

  findById(id: number) {
    return undefined
  }

}
