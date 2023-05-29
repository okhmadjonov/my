import React, { useEffect } from "react";
import "./Home.scss";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import NewAndSale from "./components/Catalog/NewAndSale/NewAndSale";
import Catalog from "./components/Catalog/Catalog";
import Lookbookblog from "./components/Lookbookblog/Lookbookblog";
import Instablog from "./components/InstaBlog/Instablog";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <BannerSlider />
        <NewAndSale />
        <Catalog />
        <Lookbookblog />
        <Instablog />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
