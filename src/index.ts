import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
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
