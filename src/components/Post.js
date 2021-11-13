import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "./PostList";

const Post = () => {
    const [post,setPost] = useState(null);
    const fetch = async()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
        const result = await res.data;
        setPost(result);
    }
    useEffect(()=>{
        fetch();
    },[])
    return (
       <div>
           {post && post.map(p=><PostList post={p}/>)}
       </div>
    );
}

export default Post;