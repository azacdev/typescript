import { PostProp } from "../../types/type";
import PostCard from "../postCard/PostCard";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const PostList = async () => {
  const data:PostProp [] = await getData();

  return (
    <div>
      {/* <PostCard title={"Hello"} body={"This is the description"} /> */}
      {data.map((post:PostProp ) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
