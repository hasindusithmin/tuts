

const commentList = (props) => {
    const {id,name,email,body} = props.comment;
    let cn = (id %2 ===0) ? 'w3-ul w3-pale-green':'w3-ul w3-pale-blue';
    return (
        <ul className={cn} key={id}>
            <li title="name">{name}</li>
            <li title="email">{email}</li>
            <li title="body">{body}</li>
        </ul>
    );
}

export default commentList;