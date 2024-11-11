import { Request, Response } from "express";
import CreatePost from "../../application/usecases/post/CreatePost";
import PostInMemory from "../../infra/repositories/in-memory/post/PostInMemory";
import GetPost from "../../application/usecases/post/GetPost";
import GetAllPosts from "../../application/usecases/post/GetAllPosts";

export default class PostController {
  async createUser(req: Request, res: Response) {
    const bodyData = req.body;
    const createPost = new CreatePost(PostInMemory);
    const post = await createPost.execute(bodyData);
    console.log(post);

    res.status(201).json({
      message: "Post has been created",
      data: post,
    });
  }
  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    const get = new GetPost(PostInMemory);

    const postById = await get.execute(Number(id));
    res.status(200).json({
      message: "Post ID: " + postById.id,
      data: postById,
    });
  }
  async getAllUsers(req: Request, res: Response) {
    const getAll = new GetAllPosts(PostInMemory);
    const posts = await getAll.execute();
    res.status(200).json({
      message: "Posts",
      quantity: posts.length,
      data: posts,
    });
  }
}
