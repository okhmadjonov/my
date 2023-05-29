import React, { useEffect } from "react";

import { BsHeart } from "react-icons/bs";
import "./Catalog.scss";
import catalogData from "./catalodData.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../../reduxToolkit/productSlice";
const Catalog = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="catalog1">
      <div className="catalog__container1">
        <div className="catalog__title">
          <h2>КАТАЛОГ</h2>
        </div>
        <div className="catalog__products">
          {products.map((item, index) => (
            <div key={item.id} className="catalog__card">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${item.imgUrl})` }}>
                <div className="prioritet__like">
                  <div
                    className={
                      item.prioritate.toLocaleLowerCase() === "хит продаж"
                        ? "hitprodaj"
                        : item.prioritate.toLocaleLowerCase() === "новинка"
                        ? "novinka"
                        : item.prioritate.toLocaleLowerCase() ===
                          "последний размер"
                        ? "posledniyrazmer"
                        : item.prioritate.toLocaleLowerCase() === "распродажа"
                        ? "rasprodaja"
                        : "prioritet"
                    }

                    // className="prioritet"
                  >
                    <p className="prior__title">{item.prioritate}</p>
                  </div>
                  <div className="like">
                    <BsHeart />
                  </div>
                </div>
                <div className="size__add">
                  <div className="size">
                    <p>40</p>
                    <p>42</p>
                    <p>44</p>
                    <p>46</p>
                    <p>48</p>
                  </div>
                  <div className="add">
                    <p>Добавить в корзину</p>
                  </div>
                </div>
              </div>
              <div className="card__price__name">
                <p className="name">{item.name}</p>
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="show__all">
          <Link className="all">посмотреть все</Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
