import React from "react";
import "./NotFound.css";
import lost from "../../assets/images/404.png";
import Loader from "react-loaders";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFoundDiv">
      <h2 className="text-animate notFound-text">Are you lost...</h2>
      <img className="text-animate notFound-pic" src={lost} alt="text"/>
      <Link to="/Home" className="flat-button">
        Home
      </Link>
      <Loader type="pacman" />
    </div>
  );
};

export default NotFound;
