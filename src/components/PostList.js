

const PostList = (props) => {
    const {id,title,body} = props.post;
    let cn = (id %2 ===0) ? 'w3-ul w3-pale-green':'w3-ul w3-pale-blue';
    return (
        <ul className={cn} key={id}>
            <li title="title">{title}</li>
            <li title="body">{body}</li>
        </ul>
    );
}

export default PostList;