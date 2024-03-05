import { FC, useState, useEffect } from "react";
import PostItem from "./Post";
import { PostModel } from "../../models/PostModel";
import PostService from "../../services/PostService";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../styles/Post.css";
import Loading from "../../global_components/interface/Loading";
import PageHeader from "../../global_components/interface/PageHeader";
import { userId } from "../../utils/UserId";

const Posts: FC = () => {
  const [posts, setPosts] = useState<PostModel[]>();
  useEffect(() => {
    PostService.getPosts().then(setPosts);
  }, []);

  if (!posts) {
    return <Loading />;
  }
  
  return (
    <>
      <PageHeader url={"/"} name={"Posts"} />
      <Box className="BoxCreate">
        <NavLink className="CreateNavlink" to={`/post/create`}>
          Create new one
        </NavLink>
      </Box>
      <Box>
        {posts?.map((post, i) => {
          if (post.userId === userId) {
            return (
              <PostItem
                key={i}
                postId={post.id}
                title={post.title}
                body={post.body}
              />
            );
          }
          return null;
        })}
      </Box>
    </>
  );
};

export default Posts;
