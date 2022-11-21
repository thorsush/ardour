import { styled } from "@mui/material";

export const ImageContainer = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  alignSelf: "center",
  justifySelf: "center",
}));
export const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
export const MainPageContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  marginLeft: "30vw",
  fontSize: "130px",
  fontFamily: "arial",
}));
export const DataBox = styled("div")(({ theme }) => ({
  height: "18vh",
  width: "44vw",
  background: "#212120",
  color: "white",

  zIndex: "100",
  marginTop: "-17%",
  marginLeft: "38%",
}));
export const ColumnContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100%",
  width: "100%",
}));
export const Columns = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
}));
export const ImageTextContainer = styled("div")(({ theme }) => ({
  fontSize: "70px",
  marginBottom: "-30px",
  zIndex: "100",
}));
