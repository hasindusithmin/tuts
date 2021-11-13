import { useState } from "react";
import Post from "./components/Post";
import Comment from "./components/Comment";
function App() {
  const [post,setPost] = useState(false);
  const [comment,setComment] = useState(false);
  return (
    <div className="w3-container">
      <h1>click you like</h1>
      <button className="w3-btn w3-block w3-blue" onClick={()=>{setPost(true);setComment(false)}}>posts</button>
      <button className="w3-btn w3-block w3-red" onClick={()=>{setComment(true);setPost(false)}}>comments</button>
      {post && <Post />}
      {comment && <Comment />}
    </div>
  );
}

export default App;
