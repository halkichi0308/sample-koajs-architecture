import { Container } from 'typedi'
import UserService from '@/services/users/user-service'
import MockUserService from '@/services/users/mock-user-service'


Container.set([
  //{ id: UserService, value: Container.get(MockUserService) },
])

