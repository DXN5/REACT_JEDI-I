import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";
import "../../styles/Loading.css"

const Loading: FC = () => {
  return (
    <Box className="loading" >
      <CircularProgress size={100} color={"inherit"}/>
    </Box>
  );
};

export default Loading;
