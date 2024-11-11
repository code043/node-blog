export default class Post {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly content: string,
    readonly image?: string,
    readonly date?: number,
    readonly userId?: string,
    readonly id?: number
  ) {}
}
