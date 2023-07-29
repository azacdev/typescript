import { PostProp } from "../../types/type";


const PostCard = (props:PostProp ) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};

export default PostCard;
