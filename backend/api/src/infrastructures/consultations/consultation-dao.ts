import { Service } from 'typedi'
import InMemoryDatabase from '@/infrastructures/inmemory-database'
import ConsultationDto from '@/infrastructures/consultations/consultation-dto'


@Service()
export default class ConsultationDao {

  private consultations: ConsultationDto[]

  constructor(
      private inmemoryDatabase: InMemoryDatabase) {
    this.consultations = inmemoryDatabase.consultations
  }

  findAll(): ConsultationDto[] {
    return this.consultations.slice()
  }

  findById(id: number): ConsultationDto | undefined {
    return this.consultations.find(c => c.id === id)
  }

}
