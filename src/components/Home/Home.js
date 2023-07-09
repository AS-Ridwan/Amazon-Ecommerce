import React from "react";
import "./Home.css";
import homeImg from "../../images/home-man.png";
import { Link } from "react-router-dom";
import SharedBtn from "../SharedBtn/SharedBtn";

const Home = () => {
  return (
    <div className="homeContainer d-flex ">
      <div className="home-text">
        <span className="home-span">Sale up to 70% off</span>
        <h1 className="home-heading">New Collection For Fall</h1>
        <p className="home-para">
          Discover all the new arrivals of ready-to-wear collection.
        </p>

        <Link to="/shop">
          <SharedBtn>SHOP NOW</SharedBtn>{" "}
        </Link>
      </div>
      <div className="home-img">
        <img src={homeImg} alt="Man" />
      </div>
    </div>
  );
};

export default Home;
