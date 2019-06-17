import uuid from 'uuid/v4'
import { Service } from 'typedi'
import UserDto from '@/infrastructures/users/user-dto'
import RoleDto from '@/infrastructures/users/role-dto'
import LawyerDetailDto from '@/infrastructures/users/lawyer-detail-dto'
import CategoryDto from '@/infrastructures/consultations/category-dto'
import ConsultationDto from '@/infrastructures/consultations/consultation-dto'


@Service()
export default class InMemoryDataBase {

  users: UserDto[]
  roles: RoleDto[]
  lawyerDetails: LawyerDetailDto[]
  categories: CategoryDto[]
  consultations: ConsultationDto[]

  constructor() {
      this.users = [
        { id: 1, code: uuid(), role_id: 1 },
        { id: 2, code: uuid(), role_id: 2 },
        { id: 3, code: uuid(), role_id: 2 },
        { id: 4, code: uuid(), role_id: 3 },
        { id: 5, code: uuid(), role_id: 3 },
      ]
      this.roles = [
        { id: 1, name: '管理者', description: '管理者です' },
        { id: 2, name: '弁護士', description: '弁護士です' },
        { id: 3, name: '相談者', description: '相談者です' },
      ]
      this.lawyerDetails = [
        { id: 1, user_id: 2, name: '田中', email: 'tanaka@tanaka.com' },
        { id: 2, user_id: 3, name: '石井', email: 'ishi@ishi.com' },
      ]
      this.categories = [
        { id: 1, name: '交通事故', description: '交通事故です' },
        { id: 2, name: '刑事事件', description: '刑事事件です' },
        { id: 3, name: '男女問題', description: '男女問題です' },
      ]
      this.consultations = [
        {
          id: 1,
          title: '交通事故のサンプルQ1です',
          category_id: 1,
          consultor_id: 4,
          answerer_id: 2,
          question: '交通事故のサンプルQ1の本文です',
          answer: '交通事故のサンプルA1の本文です',
          created_at: '2019-06-10 12:00:00'
        },
        {
          id: 2,
          title: '交通事故のサンプルQ2です',
          category_id: 1,
          consultor_id: 5,
          answerer_id: 2,
          question: '交通事故のサンプルQ2の本文です',
          answer: '交通事故のサンプルA2の本文です',
          created_at: '2019-06-10 16:30:30'
        },
        {
          id: 3,
          title: '刑事事件のサンプルQ1です',
          category_id: 2,
          consultor_id: 4,
          answerer_id: 2,
          question: '刑事事件のサンプルQ1の本文です',
          answer: '刑事事件のサンプルA1の本文です',
          created_at: '2019-06-13 09:33:28'
        },
      ]
  }

}
