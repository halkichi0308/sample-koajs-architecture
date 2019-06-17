import { Service } from 'typedi'
import InMemoryDatabase from '@/infrastructures/inmemory-database'
import LawyerDetailDto from '@/infrastructures/users/lawyer-detail-dto'


@Service()
export default class LawyerDetailDao {

  private lawyerDetails: LawyerDetailDto[]

  constructor(
      private inmemoryDatabase: InMemoryDatabase) {
    this.lawyerDetails = inmemoryDatabase.lawyerDetails
  }

  findAll(): LawyerDetailDto[] {
    return this.lawyerDetails.slice()
  }

  findById(id: number): LawyerDetailDto | undefined {
    return this.lawyerDetails.find(c => c.id === id)
  }

}
