import { JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers"
import { UserRepository } from '@user/repository'

@JsonController()
export class UserController {
  @Get("/users/all")
  getAll(){
    return UserRepository.findAll();
  }
}