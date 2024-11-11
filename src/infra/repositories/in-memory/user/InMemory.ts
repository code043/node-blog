import UserRepository, {
  UserResponse,
} from "../../../../application/repositories/user/UserRepository";
import User, { UserData } from "../../../../domain/entities/User";

class InMemory implements UserRepository {
  private list: UserData[] = [];

  constructor() {
    this.list = [
      {
        id: "3bbe460f-b43b-46af-84f9-e61b7be62476",
        fullName: "John Doe",
        username: "john023",
        email: "john01@email.com",
        password:
          "$2b$10$xbGNqsC1G.iGcpIv8MIUj.gZj9Dzya3CL3E7.YCTNI77QgAs1DH/u",
        image:
          "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
      },
    ];
  }

  async createUser(input: UserData): Promise<UserResponse | null> {
    const newUser = {
      id: crypto.randomUUID(),
      ...input,
    };
    try {
      const userDatabase = this.list.find((user) => user.email === input.email);
      if (userDatabase) return null;
      this.list.push(newUser);
    } catch (error) {
      console.log(error);
    }
    const { id } = newUser;
    const user = this.list.find((user) => user.id === id) ?? ({} as User);
    const { fullName, username, email, image } = user;
    return {
      fullName,
      username,
      email,
      image,
      id: user.id,
    };
  }
  async getUserById(id?: string): Promise<UserResponse> {
    const user = this.list.find((user) => user.id === id) as UserData;
    const { fullName, username, email, image } = user;
    return {
      fullName,
      username,
      email,
      image,
      id: user.id,
    };
  }
  async getAllUsers(): Promise<UserResponse[]> {
    return this.list.map((user) => {
      const { fullName, username, email, image } = user;
      return {
        fullName,
        username,
        email,
        image,
        id: user.id,
      };
    });
  }
}

export default new InMemory();
