const PostItem = (props: any) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    );
}

export default PostItem