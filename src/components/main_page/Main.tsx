import { FC, useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../styles/Main.css";
import PostService from "../../services/PostService";
import UserService from "../../services/UserService";
import { UserModel } from "../../models/UserModel";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import UserCard from "../user/UserCard";
import Loading from "../../global_components/interface/Loading";
import { NextPage, PreviouslyPage } from "../../utils/SliderActiveStyles";

const Main: FC = () => {
  const [users, setUsers] = useState<UserModel[]>();
  const [pageSlider, setPageSider] = useState(1);
  useEffect(() => {
    UserService.getUsers().then(setUsers);
  }, []);

  return (
    <>
      <Box className="MainHeader">Welcome!</Box>
      <Box className="MainComment">Select the user and watch content:</Box>
      {!users && <Loading />}
      {users && (
        <Box className="UserCardsContainer">
          <Button
            className="listButtons"
            onClick={() => PreviouslyPage(pageSlider, setPageSider)}
          >
            <ArrowBackIosRoundedIcon fontSize="large" />
          </Button>

          {users?.map((item, i) => (
            <UserCard key={i} item={item} pageSlider={pageSlider} i={i} />
          ))}

          <Button
            className="listButtons"
            onClick={() => NextPage(users, pageSlider, setPageSider)}
          >
            <ArrowForwardIosRoundedIcon fontSize="large" />
          </Button>
        </Box>
      )}
    </>
  );
};

export default Main;
