import UserRepository from "../../../../application/repositories/user/UserRepository";
import User, { UserData } from "../../../../domain/entities/User";
type UserResponse = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  image: string;
  id: string;
};
class InMemory implements UserRepository {
  private list: UserData[] = [];

  async createUser(input: UserData): Promise<UserData> {
    const newUser = {
      id: crypto.randomUUID(),
      ...input,
    };

    this.list.push(newUser);
    const { id } = newUser;
    return this.list.find((user) => user.id === id) ?? ({} as User);
  }
  async getUserById(id: string): Promise<UserData> {
    return this.list.find((user) => user.id === id) as UserData;
  }
}

export default new InMemory();
