import "../logo-container/logo.css";
import { useEffect, useState } from "react";
import "./home.css";
import logo from "../assets/ardourlogo.svg";

const HomePage: React.FC<{}> = ({}) => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <h1>Home Page</h1>
          <div className="logo-container-home">
            <img height={"100%"} width={"100%"} src={logo} />
          </div>
        </div>

        <div className="scroll-div">
          <h1 style={{ fontSize: "100px" }}>Your Text Comes Here</h1>
          <h1 style={{ fontSize: "100px" }}>Your Text Comes Here</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
