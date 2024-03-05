import { UserModel } from "../models/UserModel";

export const NextPage = (
  users: UserModel[] | undefined,
  pageSlider: number,
  setPageSider: React.Dispatch<React.SetStateAction<number>>
) => {
  if (pageSlider === users?.length!) {
    setPageSider(users?.length!);
  } else {
    setPageSider(pageSlider + 1);
  }
};

export const PreviouslyPage = (
  pageSlider: number,
  setPageSider: React.Dispatch<React.SetStateAction<number>>
) => {
  if (pageSlider === 1) {
    setPageSider(1);
  } else {
    setPageSider(pageSlider - 1);
  }
};

export const userCardStyle = (pageSlider: number, i: number) => {
  const styles = {
    height: heightUsersCards(pageSlider, i),
    width: widthUsersCards(pageSlider, i),
    whiteSpace: whiteSpaceUsersCards(pageSlider, i),
    opacity: opacityUsersCards(pageSlider, i),
    transform: transformUsersCards(pageSlider, i),
    border: borderUsersCards(pageSlider, i),
  };
  return styles;
};

export const userCardDisabledStyle = (pageSlider: number, i: number) => {
  const styles = {
    display: displayUsersCards(pageSlider, i),
  };
  return styles;
};

const heightUsersCards = (pageSlider: number, i: number) => {
  if (i + 1 === pageSlider || i + 1 - pageSlider === 1 || i === pageSlider - 2)
    return "600px";
  return "250px";
};

const widthUsersCards = (pageSlider: number, i: number) => {
  if (i + 1 === pageSlider || i + 1 - pageSlider === 1 || i === pageSlider - 2)
    return "302px";
  return "0px";
};

const borderUsersCards = (pageSlider: number, i: number) => {
  if (i + 1 === pageSlider || i + 1 - pageSlider === 1 || i === pageSlider - 2)
    return "black solid 3px";
  return "black solid 0px";
};

const whiteSpaceUsersCards = (pageSlider: number, i: number) => {
  if (i + 1 - pageSlider === 1 || i === pageSlider - 2) return "nowrap";
  return "balance";
};

const opacityUsersCards = (pageSlider: number, i: number) => {
  if (i + 1 - pageSlider === 1 || i === pageSlider - 2) return "0.3";
  if (i + 1 ===  pageSlider ) return "1";
  return "0";
};

const transformUsersCards = (pageSlider: number, i: number) => {
  if (i + 1 - pageSlider === 1 || i === pageSlider - 2) return "scale(0.7)";
  if (i + 1 === pageSlider) return "scale(1)";
  return "scale(0.000001)";
};

const displayUsersCards = (pageSlider: number, i: number) => {
  if (i + 1 - pageSlider === 1 || i === pageSlider - 2) return "block";
  return "none";
};