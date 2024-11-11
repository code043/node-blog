import express from "express";
import cors from "cors";
import { userRouter } from "./interface_adapter/routes/user-route";
import { postRouter } from "./interface_adapter/routes/post-route";

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
app.use("/blog/api/", userRouter);
app.use("/blog/api/", postRouter);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Blog",
  });
});

app.listen(port, () => {
  console.log({
    text: "Server running",
    http: "http://localhost:" + port,
    date: new Date(),
  });
});
