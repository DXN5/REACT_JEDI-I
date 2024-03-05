export const Switcher = (state: boolean) => {  
  if (state) {
    return false
  } else {
    return true
  }
};

export const photoSwither = (
  id: number, 
  photoId: number | null, 
  setPhotoId: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
  if(photoId === id) {
    setPhotoId(null)
  } else {
    setPhotoId(id)
  }
}