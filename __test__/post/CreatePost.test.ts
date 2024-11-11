import PostInMemory from "../../src/infra/repositories/in-memory/post/PostInMemory";
import CreatePost from "../../src/application/usecases/post/CreatePost";

test("should create a new post", async () => {
  const createPost = new CreatePost(PostInMemory);
  const input = {
    title: "Learn Javascript first of learning NodeJs",
    description: "NodeJs is a main javascript run time.",
    content: "...",
    userId: "3bbe460f-b43b-46af-84f9-e61b7be62476",
  };
  const post = await createPost.execute(input);
  console.log(post);
  expect(post?.id).not.toBeUndefined();
  expect(post?.title).toEqual("Learn Javascript first of learning NodeJs");
});
