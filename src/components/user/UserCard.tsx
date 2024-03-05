import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { UserModel } from "../../models/UserModel";
import { userCardDisabledStyle, userCardStyle } from "../../utils/SliderActiveStyles";
import { getUserId } from "../../utils/UserId";

interface Props {
  pageSlider: number;
  item: UserModel;
  i: number;
}

const UserCard: FC<Props> = ({ item, pageSlider, i }) => {
  return (
    <>
      <Box className="userCard" key={i} sx={() => userCardStyle(pageSlider, i)}>
        <Box
          className="userCardDisabled"
          sx={() => userCardDisabledStyle(pageSlider, i)}
        ></Box>
        <Typography>
          <b>Id:</b> {item.id}
        </Typography>
        <Typography>
          <b>Name:</b> {item.name}
        </Typography>
        <Typography>
          <b>UserName:</b> {item.username}
        </Typography>
        <Typography sx={{ letterSpacing: "-0.5px" }}>
          <b>Email:</b> {item.email}
        </Typography>
        <Typography>
          <b>Street:</b> {item.address.street}
        </Typography>
        <Typography>
          <b>Suite:</b> {item.address.suite}
        </Typography>
        <Typography>
          <b>City:</b> {item.address.city}
        </Typography>
        <Typography>
          <b>Zip code:</b> {item.address.zipcode}
        </Typography>
        <Typography>
          <b>Latitude:</b> {item.address.geo.lat}
        </Typography>
        <Typography>
          <b>Longitude:</b> {item.address.geo.lng}
        </Typography>
        <Typography>
          <b>Phone:</b> {item.phone}
        </Typography>
        <Typography>
          <b>Wrbsite:</b> {item.website}
        </Typography>
        <Typography>
          <b>Company name:</b>
        </Typography>
        <Typography sx={{ letterSpacing: "0px" }}>
          {item.company.name}
        </Typography>
        <Typography>
          <b>Catch phrase:</b>
        </Typography>
        <Typography sx={{ letterSpacing: "-0.5px" }}>
          {item.company.catchPhrase}
        </Typography>
        <Typography>
          <b>Company bs:</b>
        </Typography>
        <Typography sx={{ letterSpacing: "-0.5px" }}>
          {item.company.bs}
        </Typography>
        <Box className="ContainerMainButtons">
          <NavLink onClick={() => getUserId(item.id)} className="mainButton" to={`/posts`}>
            POSTS
          </NavLink>
          <NavLink onClick={() => getUserId(item.id)} className="mainButton" to={`/albums`}>
            ALBUMS
          </NavLink>
        </Box>
      </Box>
    </>
  );
};

export default UserCard;
