import { useState, useEffect } from 'react'
import PostItem from './PostItem';
import PostModel from '../../models/PostModel';
import PostService from '../../services/PostService'

const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>();
    useEffect(() => {
        PostService.getPosts().then(setPosts)
      });

      return (
        <div>
            {posts?.map((post, index) => {
                return <PostItem title={post.title} body={post.body} />
            })} 
        </div>
      );
}

export default Posts