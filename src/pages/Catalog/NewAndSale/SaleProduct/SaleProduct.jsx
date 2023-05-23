import React from "react";
import { Link } from "react-router-dom";
import "./SaleProduct.scss";

const SaleProduct = () => {
  return (
    <div className="saleproduct">
      <div className="saleproduct__card">
        <div className="saleproduct__title">
          <h2>РАСПРОДАЖА</h2>
        </div>
        <div className="saleproduct__smotret">
          <Link className="smotret">СМОТРЕТЬ</Link>
        </div>
      </div>
    </div>
  );
};

export default SaleProduct;
