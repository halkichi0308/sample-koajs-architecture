import { Service } from 'typedi'
import UserRepository from '@/services/users/user-repository'


@Service()
export default class MockUserService {

  constructor(
      private readonly userRepository: UserRepository) {
  }

  findAll() {
    return this.userRepository.findAll()
  }

  findById(id: number) {
    return this.userRepository.findById(id)
  }

}
