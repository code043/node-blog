import GetPost from "../../src/application/usecases/post/GetPost";
import PostInMemory from "../../src/infra/repositories/in-memory/post/PostInMemory";

test("should get a post by ID", async () => {
  const getPost = new GetPost(PostInMemory);
  const post = await getPost.execute(1);
  expect(post?.id).not.toBeUndefined();
  expect(post?.title).toEqual("Learn NodeJs");
});
