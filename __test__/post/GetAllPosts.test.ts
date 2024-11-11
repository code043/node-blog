import GetAllPosts from "../../src/application/usecases/user/GetAllUsers";
import PostInMemory from "../../src/infra/repositories/in-memory/user/InMemory";

test("should get all posts", async () => {
  const getAll = new GetAllPosts(PostInMemory);
  const posts = await getAll.execute();
  console.log(posts);
  expect(posts).toBeInstanceOf(Array);
});
