import bcrypt from "bcrypt";
import User from "../../../domain/entities/User";
import UserRepository from "../../repositories/user/UserRepository";

export default class CreateUser {
  constructor(public repository: UserRepository) {}
  async execute(input: Input) {
    const { fullName, username, email, password, image } = input;
    const user = new User(fullName, username, email, password, image);
    try {
      //user.verifyEmail();
      user.createDefaultImage();
      //user.verifyPassword();
      //this.hashPassword(user.email);
    } catch (err) {
      console.log(err);
    }

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
