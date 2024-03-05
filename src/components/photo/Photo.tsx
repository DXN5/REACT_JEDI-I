import { FC } from "react";
import { Box, Typography } from "@mui/material";
import "../../styles/Photo.css";
import { photoBigBoxStyle } from "../../utils/PhotoActiveStyles";

interface Props {
  id: number;
  photoId: number | null;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Photo: FC<Props> = ({ id, title, url, thumbnailUrl, photoId }) => {
  return (
    <>
      <Box
        className="Photo"
        sx={{ borderBottom: photoId === id ? "none" : "#000 solid 3px" }}
      >
        <Typography className="PhotoHeader">{id}</Typography>
        <Typography className="PhotoBody">{title}</Typography>
        <img src={thumbnailUrl} height={50} width={50}></img>
      </Box>
      <Box sx={() => photoBigBoxStyle(photoId, id)}>
        <img
          style={{
            transition: "0.3s",
            height: photoId === id ? "600px" : "0px",
          }}
          src={url}
        ></img>
      </Box>
    </>
  );
};

export default Photo;
