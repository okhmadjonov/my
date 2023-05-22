import React from "react";
import "./Home.scss";
import BannerSlider from "../../components/BannerSlider/BannerSlider";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <BannerSlider />
      </div>
    </div>
  );
};

export default Home;
