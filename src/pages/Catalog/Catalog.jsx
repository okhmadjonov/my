import React from "react";
import catalogData from "./catalodData";
import { BsHeart } from "react-icons/bs";
import "./Catalog.scss";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog__container111">
        <div className="catalog__inner">
          <div className="catalog__inner__top">
            <h1>Каталог</h1>
          </div>
          <div className="catalog__inner__subtop">
            <p className="glavnaya__katalog">Главная/КАТАЛОГ</p>

            <div className="order__option">
              <p className="sortirovka">Сортировка</p>
              <select name="popular" id="popular">
                <option value="popopulyarnosti">По популярности</option>
                <option value="popopulyarnosti">По популярности</option>
              </select>
            </div>
          </div>
          <div className="catalog__inner__bottom">
            <div className="catalog__inner__bottom__left"></div>
            <div className="catalog__inner__bottom__right">
              <div className="catalog__products">
                {catalogData.map((item, index) => (
                  <div key={item.id} className="catalog__card">
                    <div
                      className="card__img"
                      style={{ backgroundImage: `url(${item.imgUrl})` }}>
                      <div className="prioritet__like">
                        <div
                          className={
                            item.prioritate.toLocaleLowerCase() === "хит продаж"
                              ? "hitprodaj"
                              : item.prioritate.toLocaleLowerCase() ===
                                "новинка"
                              ? "novinka"
                              : item.prioritate.toLocaleLowerCase() ===
                                "последний размер"
                              ? "posledniyrazmer"
                              : item.prioritate.toLocaleLowerCase() ===
                                "распродажа"
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
