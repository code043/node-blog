import bcrypt from "bcrypt";
import User from "../../../domain/entities/User";
import UserRepository from "../../repositories/user/UserRepository";
import Email from "../../../domain/entities/Email";
import Password from "../../../domain/entities/Password";

export default class CreateUser {
  constructor(public repository: UserRepository) {}
  async execute(input: Input) {
    const { fullName, username, email, password, image } = input;
    const validEmail = new Email(email).getValue();
    const hashedPassword = new Password(password, 10).createHash(password, 10);
    const user = new User(
      fullName,
      username,
      validEmail,
      hashedPassword,
      image
    );
    user.createDefaultImage();

    return await this.repository.createUser(user);
  }
}

type Input = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  image?: string | undefined;
};
