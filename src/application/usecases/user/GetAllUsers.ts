import UserRepository from "../../repositories/user/UserRepository";

export default class GetAllUsers {
  constructor(public repository: UserRepository) {}
  async execute(): Promise<Output[]> {
    return (await this.repository.getAllUsers()) as Output[];
  }
}

type Output = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  image: string;
  id: string;
};
