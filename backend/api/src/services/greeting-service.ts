import { Service } from 'typedi'


@Service()
export default class GreetingService {

  constructor() {
  }

  hello(): { message: string } {
    return { message: 'Hello.' }
  }

  goodbye(): { message: string } {
    return { message: 'Good Bye.' }
  }

}
