import React from "react";
import "./Home.scss";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import NewAndSale from "./components/Catalog/NewAndSale/NewAndSale";
import Catalog from "./components/Catalog/Catalog";
import Lookbookblog from "./components/Lookbookblog/Lookbookblog";
// import Lookbook from "./components/Lookbook/Lookbook";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <BannerSlider />
        <NewAndSale />
        <Catalog />
        <Lookbookblog />
      </div>
    </div>
  );
};

export default Home;
