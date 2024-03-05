import { FC } from "react";
import { Box, Typography } from "@mui/material";
import "../../styles/Comments.css";

interface Props {
  name: string;
  email: string;
  body: string;
}

const Comment: FC<Props> = ({ name, email, body }) => {
  return (
    <>
      <Box className="BoxComment">
        <Typography className="CommentHeader" >{name}</Typography>
        <Typography className="Comment" sx={{color: "#61a8c7"}} ><b>{email}</b></Typography>
        <Typography className="Comment" >{body}</Typography>
      </Box>
    </>
  );
};

export default Comment;
