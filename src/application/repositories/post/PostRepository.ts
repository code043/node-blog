import Post from "../../../domain/entities/Post";

export default interface UserRepository {
  createPost(input: Post): Promise<Post | undefined>;
  getPostById(id?: number): Promise<Post | undefined>;
  getAllPost(): Promise<Post[]>;
}
