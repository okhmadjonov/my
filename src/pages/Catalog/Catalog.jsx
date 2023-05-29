import React, { useEffect, useState } from "react";

import { BsHeart } from "react-icons/bs";
import "./Catalog.scss";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import clothes from "./clothes";
import colors from "./colors";
import sizes from "./sizes";
import { getAllProducts } from "../../reduxToolkit/productSlice";
const Catalog = () => {
  const [selectedClothes, setSelectedClothes] = useState([]);

  const onClickSelectClothes = (item) => {
    let index = selectedClothes.findIndex((x) => x === item.id);
    if (index >= 0) selectedClothes.splice(index, 1);
    else selectedClothes.push(item.id);
    setSelectedClothes([...selectedClothes]);
  };
  /*-----------------------------------------------------------------*/

  const [colorSelect, setColorSelect] = useState([]);

  const onClickSelectColor = (item) => {
    let index = colorSelect.findIndex((x) => x === item.id);
    if (index >= 0) colorSelect.splice(index, 1);
    else colorSelect.push(item.id);
    setColorSelect([...colorSelect]);
  };

  /**------------------------------------------------------ */

  const [selectSize, setSelectSize] = useState([]);
  const onClickSelectSize = (item) => {
    let index = selectSize.findIndex((x) => x === item.id);
    if (index >= 0) selectSize.splice(index, 1);
    else selectSize.push(item.id);
    setSelectSize([...selectSize]);
  };

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

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
                <option value="popopulyarnosti">Все</option>
                <option value="popopulyarnosti">По популярности</option>
              </select>
            </div>
          </div>
          <div className="catalog__inner__bottom">
            <div className="catalog__inner__bottom__left">
              <div className="categories">
                <Link className="all__categories item">Все категории</Link>
                <Link className="new__categories item">Новинки</Link>
                <Link className="sale__categories item">Распродажа</Link>
              </div>

              <div className="clothes">
                {clothes.map((item, index) => (
                  <div className="clothes__item" key={index}>
                    <div
                      className="clothes__check"
                      onClick={onClickSelectClothes.bind(this, item)}>
                      {selectedClothes.findIndex((x) => x === item.id) >= 0 ? (
                        <div className="Box-active"></div>
                      ) : (
                        <div className="Box"></div>
                      )}
                    </div>
                    <div className="clothes__name">{item.name} </div>
                  </div>
                ))}
              </div>
              <div className="colors">
                <h2>Цвет</h2>
                <div className="colors__content">
                  {colors.map((item, index) => (
                    <div className="colors__item" key={index}>
                      <div
                        className="color__check"
                        onClick={onClickSelectColor.bind(this, item)}>
                        {colorSelect.findIndex((x) => x === item.id) >= 0 ? (
                          <div className="Box-active"></div>
                        ) : (
                          <div className="Box"></div>
                        )}
                      </div>

                      <div className="color__name">{item.name} </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* /************************************************************ */}

              <div className="sizes">
                <h2>Размер</h2>
                <div className="sizes__content">
                  {sizes.map((item, index) => (
                    <div className="sizes__item" key={index}>
                      <div
                        className="size__check"
                        onClick={onClickSelectSize.bind(this, item)}>
                        {selectSize.findIndex((x) => x === item.id) >= 0 ? (
                          <div className="Box-active"></div>
                        ) : (
                          <div className="Box"></div>
                        )}
                      </div>

                      <div className="size__name">{item.size} </div>
                    </div>
                  ))}
                </div>
              </div>

              {/*-----------------------------------Size End--------------------------------*/}

              {/* -------------------цена-------------- */}
              <div className="price">
                <div className="price__title">
                  <h2>цена</h2>
                </div>
                <div className="price__content">
                  <p className="from">от</p>
                  <input
                    type="text"
                    name="price"
                    className="from__price"
                    placeholder="999"
                  />
                  <p className="to">ДО</p>
                  <input
                    type="text"
                    name="price"
                    className="to__price"
                    placeholder="20000"
                  />
                  <span className="rubl">руб.</span>
                </div>
              </div>
              {/**--------------------------Price End-------------------- */}
              <div className="clear">
                <Link className="clear__filter">Очистить фильтр</Link>
              </div>
            </div>
            {/* Left Side */}
            <div className="catalog__inner__bottom__right">
              {/* Right Side */}
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
              <div className="show__all1">
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
