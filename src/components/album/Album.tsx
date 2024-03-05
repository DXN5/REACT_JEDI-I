import { FC } from "react";
import { Box, Typography } from "@mui/material";
import "../../styles/Album.css";
import { NavLink } from "react-router-dom";
import { getAlbumId } from "../../utils/AlbumId";

interface Props {
  id: number;
  title: string;
}

const Album: FC<Props> = ({ title, id }) => {
  return (
    <NavLink onClick={() => getAlbumId(id)} className="AlbumNavlink" to={`/album/photos`}>
      <Box className="Album" >
        <Typography className="AlbumHeader">{id}</Typography>
        <Typography className="AlbumBody">{title}</Typography>
      </Box>
    </NavLink>
  );
};

export default Album;
