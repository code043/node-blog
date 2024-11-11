import PostRepository from "../../repositories/post/PostRepository";

export default class GetPost {
  constructor(public repository: PostRepository) {}
  async execute(id?: number): Promise<Output> {
    return (await this.repository.getPostById(id)) as Output;
  }
}

type Output = {
  title: string;
  description: string;
  content: string;
  date?: number;
  userId?: string;
  id?: number;
};
