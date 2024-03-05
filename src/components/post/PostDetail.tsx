import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PostModel } from "../../models/PostModel";
import PostService from "../../services/PostService";
import { Box, Button, Typography } from "@mui/material";
import "../../styles/PostDetails.css";
import Loading from "../../global_components/interface/Loading";
import PostEdit from "./PostEdit";
import { Switcher } from "../../utils/switcher";
import PageHeader from "../../global_components/interface/PageHeader";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostModel>();
  const [state, setState] = useState(false);

  useEffect(() => {
    PostService.getPostById(id).then(setPost);
  }, []);

  const onDelete = () => {
    PostService.deletePost(id);
  };

  if (!post) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader url={"/posts"} name={`Post-${id}`} />
      <Box className="PostDetails">
        <Typography className="PostDetailsHeader">{post?.title}</Typography>
        <Typography className="PostDetailsComment">{post?.body}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <NavLink className="CommentNavlink" to={`/post/${id}/comments`}>
          comments
        </NavLink>
        <Button
          onClick={() => setState(Switcher(state))}
          className="CommentNavlink"
          sx={{ backgroundColor: state ? "#61a8c7" : "none" }}
        >
          edit post
        </Button>
        <NavLink to={`/posts`}>
          <Button onClick={onDelete} className="CommentNavlink">
            delete post
          </Button>
        </NavLink>
      </Box>

      <PostEdit state={state} setState={setState}/>
    </>
  );
};

export default PostDetail;
