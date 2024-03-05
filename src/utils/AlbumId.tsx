export let albumId: number | null = null;

export const getAlbumId = (id: number) => {
  if (id) {
    albumId = id;
  }
  return albumId;
};