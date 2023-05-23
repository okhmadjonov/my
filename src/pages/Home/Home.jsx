import React from "react";
import "./Home.scss";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import NewAndSale from "../Catalog/NewAndSale/NewAndSale";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <BannerSlider />
        <NewAndSale />
      </div>
    </div>
  );
};

export default Home;
