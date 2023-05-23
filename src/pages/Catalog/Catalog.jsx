import React from "react";
import "./Catalog.scss";
import catalogData from "./catalodData.js";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog__container">
        <div className="catalog__title">
          <h2>КАТАЛОГ</h2>
        </div>
        <div className="catalog__products">
          {catalogData.map((item, index) => (
            <div key={item.id} className="catalog__card">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${item.imgUrl})` }}>
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
      </div>
    </div>
  );
};

export default Catalog;
