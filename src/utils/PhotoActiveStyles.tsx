export const photoBigBoxStyle = (photoId: number | null, id: number) => {
  const styles = {
    height: photoId === id ? "600px" : "0px",
    opacity: photoId === id ? "1" : "0",
    border: photoId === id ? "#000 solid 3px" : "none",
    borderTop: "none",
    padding: photoId === id ? "20px 20px" : "0px 0px",
    transition: "0.3s",
  };
  return styles;
};