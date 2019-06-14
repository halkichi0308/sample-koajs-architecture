import { JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers"
import UserRepository  from '@user/repository'

@JsonController()
export class UserController {
  @Get("/users/all")
  getAll(){
    console.log("ok")
    return [
      { id: '234', name: 'kkk' },
      { id: '345', name: 'ttt' },
      { id: '456', name: 'nnn' },
    ]
  }
}