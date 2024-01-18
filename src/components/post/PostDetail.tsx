import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import PostModel from '../../models/PostModel';
import PostService from '../../services/PostService'

const PostDetail = () => {
    let { id } = useParams()
    const [post, setPost] = useState<PostModel>();

    useEffect(() => {
        PostService.getPostById(id).then(setPost)
      });

    return (
        <div>
            <h3>{post?.title}</h3>
            <p>{post?.body}</p>
        </div>
    );
}

export default PostDetail;