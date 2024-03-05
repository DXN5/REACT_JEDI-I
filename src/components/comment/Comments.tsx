import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CommentModel } from "../../models/CommentModel";
import CommentService from "../../services/CommentService";
import { Box } from "@mui/material";
import "../../styles/Comments.css";
import Loading from "../../global_components/interface/Loading";
import Comment from "./Comment";
import PageHeader from "../../global_components/interface/PageHeader";

const PostComments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState<CommentModel[]>();

  useEffect(() => {
    CommentService.getPostComments(id).then(setComments);
  }, []);

  if (!comments) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader url={`/post/${id}`} name={"Comments"} />
      <Box>
        {comments?.map((comment, i) => {
          return (
            <Comment
              key={i}
              name={comment?.name}
              email={comment?.email}
              body={comment?.body}
            />
          );
        })}
      </Box>
    </>
  );
};

export default PostComments;
