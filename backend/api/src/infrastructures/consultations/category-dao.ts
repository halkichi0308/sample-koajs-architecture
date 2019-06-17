import { Service } from 'typedi'
import InMemoryDatabase from '@/infrastructures/inmemory-database'
import CategoryDto from '@/infrastructures/consultations/category-dto'


@Service()
export default class CategoryDao {

  private categories: CategoryDto[]

  constructor(
      private inmemoryDatabase: InMemoryDatabase) {
    this.categories = inmemoryDatabase.categories
  }

  findAll(): CategoryDto[] {
    return this.categories.slice()
  }

  findById(id: number): CategoryDto | undefined {
    return this.categories.find(c => c.id === id)
  }

}
