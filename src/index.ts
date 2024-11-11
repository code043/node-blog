import express from "express";
import GetUser from "./application/usecases/user/GetUser";
import InMemory from "./infra/repositories/in-memory/user/InMemory";
import CreateUser from "./application/usecases/user/CreateUser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const port = 8080;

app.get("/", async (req, res) => {
  const input = {
    fullName: "John Doe",
    username: "john023",
    email: "john01@email.com",
    password: "123",
    image: "http://image/john.png",
  };
  const createUser = new CreateUser(InMemory);
  const user = await createUser.execute(input);
  console.log(user);
  res.status(200).json({
    message: "Blog",
  });
});
app.post("/user/register", async (req, res) => {
  const { fullName, username, email, password, image } = req.body;
  const bodyData = {
    fullName: fullName,
    username: username,
    email: email,
    password: password,
    image: image,
  };
  const createUser = new CreateUser(InMemory);
  const user = await createUser.execute(bodyData);
  console.log(user);
  res.status(201).json({
    message: "User has been created",
    data: user,
  });
});
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  const get = new GetUser(InMemory);

  const userById = await get.execute(id);
  res.status(200).json({
    message: "User",
    data: userById,
  });
});

app.listen(port, () => {
  console.log({
    text: "Server running",
    http: "http://localhost:" + port,
    date: new Date(),
  });
});
