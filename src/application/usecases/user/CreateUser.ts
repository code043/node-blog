import bcrypt from "bcrypt";
import User from "../../../domain/entities/User";
import UserRepository from "../../repositories/user/UserRepository";
import Email from "../../../domain/entities/Email";

export default class CreateUser {
  constructor(public repository: UserRepository) {}
  async execute(input: Input) {
    const { fullName, username, email, password, image } = input;
    const validEmail = new Email(email).getValue();
    const user = new User(fullName, username, validEmail, password, image);
    user.createDefaultImage();

    return await this.repository.createUser(user);
  }
  private async hashPassword(password: string) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }
}

type Input = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  image?: string | undefined;
};
