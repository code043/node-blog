import { Request, Response } from "express";
import GetAllUsers from "../../application/usecases/user/GetAllUsers";
import InMemory from "../../infra/repositories/in-memory/user/InMemory";
import CreateUser from "../../application/usecases/user/CreateUser";
import GetUser from "../../application/usecases/user/GetUser";

export default class UserController {
  async createUser(req: Request, res: Response) {
    const { fullName, username, email, password, image } = req.body;
    const bodyData = {
      fullName: fullName,
      username: username,
      email: email,
      password: password,
      image: image,
    };
    const createUser = new CreateUser(InMemory);
    const user = await createUser.execute(bodyData);
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "Email ja exist" });
    } else {
      res.status(201).json({
        message: "User has been created",
        data: user,
      });
    }
  }
  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    const get = new GetUser(InMemory);

    const userById = await get.execute(id);
    res.status(200).json({
      message: "User",
      data: userById,
    });
  }
  async getAllUsers(req: Request, res: Response) {
    const getAll = new GetAllUsers(InMemory);
    const users = await getAll.execute();
    res.status(200).json({
      message: "Users",
      quantity: users.length,
      data: users,
    });
  }
}
