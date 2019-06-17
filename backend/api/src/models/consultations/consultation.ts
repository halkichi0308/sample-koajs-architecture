

export default class Consultation {

  constructor(
      public readonly id: number,
      public readonly title: string,
      public readonly category_id: number,
      public readonly consultor_id: number,
      public readonly answerer_id: number,
      public readonly question: string,
      public readonly answer: string,
      public readonly created_at: string) {
  }

}
