import UserRepository from "../../repositories/user/UserRepository";

export default class GetUser {
  constructor(public repository: UserRepository) {}
  async execute(id?: string): Promise<Output> {
    return (await this.repository.getUserById(id)) as Output;
  }
}

type Output = {
  fullName: string;
  username: string;
  email: string;
  image: string;
  id: string;
};
