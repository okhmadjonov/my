import React from "react";
import { Link } from "react-router-dom";
import "./NewProduct.scss";

const NewProduct = () => {
  return (
    <div className="newproduct">
      <div className="newproduct__card">
        <div className="newproduct__title">
          <h2>НОВИНКИ</h2>
        </div>
        <div className="newproduct__smotret">
          <Link className="smotret">СМОТРЕТЬ</Link>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
