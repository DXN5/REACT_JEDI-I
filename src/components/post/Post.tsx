import { FC } from "react";
import { Box, Typography } from "@mui/material";
import "../../styles/Post.css";
import { NavLink } from "react-router-dom";

interface Props {
  postId: number;
  title: string;
  body: string;
}

const Post: FC<Props> = ({ title, body, postId }) => {
  
  return (
    <NavLink className="PostNavlink" to={`/post/${postId}`}>
      <Box className="Post" >
        <Typography className="PostHeader">{title}</Typography>
        <Typography className="PostComment">{body}</Typography>
      </Box>
    </NavLink>
  );
};

export default Post;
