import PostRepository from "../../repositories/post/PostRepository";

export default class CreatePost {
  constructor(public repository: PostRepository) {}
  async execute(input: Input): Promise<Output | undefined> {
    return await this.repository.createPost(input);
  }
}

type Input = {
  title: string;
  description: string;
  content: string;
  image?: string;
};
type Output = {
  title: string;
  description: string;
  content: string;
  image?: string;
  date?: number;
  userId?: string;
  id?: number;
};
