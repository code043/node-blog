import Post from "../../../../domain/entities/Post";
import PostRepository from "../../../../application/repositories/post/PostRepository";

class PostInMemory implements PostRepository {
  //
  posts: Post[] = [];
  constructor() {
    this.posts = [
      {
        title: "Learn NodeJs",
        description: "NodeJs is a main javascript run time.",
        content: "...",
        date: 1731348633850,
        userId: "3bbe460f-b43b-46af-84f9-e61b7be62476",
        id: 1,
      },
    ];
  }
  async createPost(input: Post): Promise<Post | undefined> {
    const newPost = {
      id: this.posts.length + 1,
      date: new Date().getTime(),
      ...input,
    };
    this.posts.push(newPost);
    return this.posts.find((post) => post.id === newPost.id);
  }
  async getPostById(id?: number): Promise<Post | undefined> {
    return this.posts.find((post) => post.id === id);
  }
  async getAllPost(): Promise<Post[]> {
    return this.posts;
  }
}

export default new PostInMemory();
