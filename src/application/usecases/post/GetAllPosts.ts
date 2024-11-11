import PostRepository from "../../repositories/post/PostRepository";

export default class GetAllUsers {
  constructor(public repository: PostRepository) {}
  async execute(): Promise<Output[]> {
    return await this.repository.getAllPost();
  }
}

type Output = {
  title: string;
  description: string;
  content: string;
  image?: string;
  date?: number;
  userId?: string;
  id?: number;
};
