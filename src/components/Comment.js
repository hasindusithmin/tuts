import axios from "axios";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";


const Comment = () => {
    const [comm,setComm] = useState(null);
    const fetch = async()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
        const result = await res.data;
        setComm(result);
    }
    useEffect(()=>{fetch();},[])
    return (
        <div>
            {comm && comm.map(c=><CommentList comment={c}/>)}
        </div>
    );
}

export default Comment;