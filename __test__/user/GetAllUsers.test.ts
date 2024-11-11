import GetAllUsers from "../../src/application/usecases/user/GetAllUsers";
import User from "../../src/domain/entities/User";
import InMemory from "../../src/infra/repositories/in-memory/user/InMemory";
import { UserData } from "../../src/domain/entities/User";

test("should get all users", async () => {
  const getAll = new GetAllUsers(InMemory);
  const users = await getAll.execute();
  console.log(typeof users[0]);
  expect(users).toBeInstanceOf(Array);
});
