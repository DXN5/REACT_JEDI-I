import { FC, useState, useEffect } from "react";
import Album from "./Album";
import { AlbumModel } from "../../models/AlbumModel";
import AlbumsService from "../../services/AlbumService";
import { Box } from "@mui/material";
import Loading from "../../global_components/interface/Loading";
import PageHeader from "../../global_components/interface/PageHeader";
import { userId } from "../../utils/UserId";

const Albums: FC = () => {
  const [albums, setAlbums] = useState<AlbumModel[]>();
  useEffect(() => {
    AlbumsService.getAlbums().then(setAlbums);
  }, []);

  if (!albums) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader url={"/"} name={"Albums"} />
      <Box>
        {albums?.map((album, i) => {
          if (album.userId === userId) {
            return <Album key={i} id={album.id} title={album.title} />;
          }
          return null;
        })}
      </Box>
    </>
  );
};

export default Albums;
