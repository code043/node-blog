import InMemory from "../../src/infra/repositories/in-memory/user/InMemory";
import CreateUser from "../../src/application/usecases/user/CreateUser";
import Email from "../../src/domain/entities/Email";
test("should register a user", async () => {
  const input = {
    fullName: "John Doe",
    username: "john023",
    email: "john01@email.com",
    password: "123",
    image: "http://image/john.png",
  };
  const createUser = new CreateUser(InMemory);
  const user = await createUser.execute(input);
  expect(user?.id).toBeDefined();
  expect(user?.fullName).toEqual("John Doe");
  expect(user?.email).toEqual("john01@email.com");
  expect(user?.image).toEqual("http://image/john.png");
});
test("should do not register a user with existing email", async () => {
  const input = {
    fullName: "John Doe",
    username: "john023",
    email: "john01@email.com",
    password: "123",
    image: "http://image/john.png",
  };
  const createUser = new CreateUser(InMemory);
  const user = await createUser.execute(input);
  expect(user?.id).not.toBeDefined();
});
test("should register a user with valid email", async () => {
  const input = {
    fullName: "John Doe",
    username: "john023",
    email: "john01@email.com",
    password: "123",
  };
  const createUser = new CreateUser(InMemory);
  const user = await createUser.execute(input);
  expect(user?.id).toBeDefined();
  expect(user?.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});
test("should do not register a user with invalid email", async () => {
  const emails = [
    "john01email.com",
    "john01@email",
    "john01email",
    "john01@@email.com",
    "john01@email..com",
  ];
  emails.forEach((email) => {
    expect(() => new Email(email)).toThrow("Invalid email");
  });
});
test("should register a user without image", async () => {
  const input = {
    fullName: "John Doe",
    username: "john023",
    email: "john01@email.com",
    password: "123",
  };
  const createUser = new CreateUser(InMemory);
  const user = await createUser.execute(input);
  expect(user?.id).toBeDefined();
  expect(user?.image).toEqual(
    "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png"
  );
});
