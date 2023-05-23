import React from "react";
import { Link } from "react-router-dom";
import "../../assets/fonts/lovelace/Zetafonts - Lovelace Text Bold Italic.otf";
import "../../assets/fonts/lovelace/Zetafonts - Lovelace Text Regular.otf";

import { useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import "./BannerSlider.scss";

const photos = [
  {
    id: "p1",
    title: "ОСЕНЬ 2023",
    url: "https://i.ibb.co/31PmYYS/banner1.png",
  },
  {
    id: "p2",
    title: "ЛЕТО 2023",
    url: "https://i.ibb.co/CnnG19s/banner2.png",
  },
];
const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };
  return (
    <div className="banner">
      <div className="banner__container">
        {/* Render the carousel */}
        <div className="slider-container">
          {photos.map((photo) => (
            <div
              key={photo.id}
              // if the photo is the current photo, show it
              className={
                photos[currentIndex].id === photo.id ? "fade" : "slide fade"
              }>
              <img src={photo.url} alt={photo.title} className="photo" />
              <div className="caption">
                <p className="banner__title">{photo.title}</p>
                <Link className="banner__catalog">В каталог</Link>
              </div>
            </div>
          ))}

          {/* Previous button */}
          <button onClick={prev} className="prev">
            <BsArrowLeftSquare />
          </button>

          {/* Next button */}
          <button onClick={next} className="next">
            <BsArrowRightSquare />
          </button>
        </div>

        {/* Render dots indicator */}
        {/* <div className="dots">
          {photos.map((photo) => (
            <span
              key={photo.id}
              // highlight the dot that corresponds to the current photo
              className={
                photos[currentIndex].id === photo.id ? "dot active" : "dot"
              }
              // when the user clicks on a dot, go to the corresponding photo
              onClick={() => setCurrentIndex(photos.indexOf(photo))}></span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default BannerSlider;
