import { UserData } from "../../../domain/entities/User";

export default interface UserRepository {
  createUser(input: UserData): Promise<UserData>;
}
