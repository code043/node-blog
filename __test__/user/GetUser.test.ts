import CreateUser from "../../src/application/usecases/user/CreateUser";
import GetUser from "../../src/application/usecases/user/GetUser";
import User from "../../src/domain/entities/User";
import InMemory from "../../src/infra/repositories/in-memory/user/InMemory";

test("should get a user by ID", async () => {
  const input = {
    fullName: "John Doe",
    username: "john023",
    email: "john01@email.com",
    password: "123",
    image: "http://image/john.png",
  };
  const createUser = new CreateUser(InMemory);
  const get = new GetUser(InMemory);
  const user = await createUser.execute(input);
  const userById = await get.execute(user?.id);
  expect(user?.id).toBeDefined();
  expect(user?.id).toEqual(userById.id);
  expect(user?.email).toEqual(userById.email);
});
