import { PostProps } from "../../types/types";
import PostCard from "../postCard/PostCard";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const PostList = async () => {
  const data: PostProps[] = await getData();

  return (
    <div>
      {/* <PostCard title={"Hello"} body={"This is the description"} /> */}
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
