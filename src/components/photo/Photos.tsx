import { FC, useState, useEffect } from "react";
import Photo from "./Photo";
import { PhotoModel } from "../../models/PhotoModel";
import PhotoService from "../../services/PhotoService";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../styles/Post.css";
import Loading from "../../global_components/interface/Loading";
import PageHeader from "../../global_components/interface/PageHeader";
import { albumId } from "../../utils/AlbumId";
import { photoSwither } from "../../utils/switcher";

const Photos: FC = () => {
  const [photos, setPhotos] = useState<PhotoModel[]>();
  const [photoId, setPhotoId] = useState<number | null>(null);
  useEffect(() => {
    PhotoService.getPhotos().then(setPhotos);
  }, []);

  if (!photos) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader url={"/albums"} name={"Photos"} />
      {photos?.map((photo, i) => {
        if (photo.albumId === albumId) {
          return (
            <Box onClick={() => photoSwither(photo.id, photoId, setPhotoId)}>
              <Photo
                key={i}
                id={photo.id}
                photoId={photoId}
                title={photo.title}
                url={photo.url}
                thumbnailUrl={photo.thumbnailUrl}
              />
              </Box>
          );
        }
        return null;
      })}
    </>
  );
};

export default Photos;
