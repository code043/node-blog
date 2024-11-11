import { UserData } from "../../../domain/entities/User";

export type UserResponse = Omit<UserData, "password">;

export default interface UserRepository {
  createUser(input: UserData): Promise<UserResponse | null>;
  getUserById(id?: string): Promise<UserResponse>;
  getAllUsers(): Promise<UserResponse[]>;
}
