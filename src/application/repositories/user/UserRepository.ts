import { UserData } from "../../../domain/entities/User";

export default interface UserRepository {
  createUser(input: UserData): Promise<UserData>;
  getUserById(id: string): Promise<UserData>;
  getAllUsers(): Promise<UserData[]>;
}
