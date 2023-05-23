import React from "react";
import "./NewAndSale.scss";
import NewProduct from "./NewProduct/NewProduct";
import SaleProduct from "./SaleProduct/SaleProduct";

const NewAndSale = () => {
  return (
    <div className="newandsale">
      <div className="newandsale__container">
        <NewProduct />
        <SaleProduct />
      </div>
    </div>
  );
};

export default NewAndSale;
