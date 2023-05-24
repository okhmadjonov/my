import React from "react";
import "./Footer.scss";
import footer__logo from "../../assets/img/footer__logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__inner">
          <div className="inner__left">
            <div className="footer__logo">
              <img src={footer__logo} alt="Footer Logo" />
            </div>
            <p className="number">
              Нужна помощь с заказом? <br />+ 7 964 705 94 64 <br />
              <span className="info">info@loylen.com</span>
            </p>
            <div className="privacy">
              <p>2021 Интернет-магазин LOYLEN</p>
              <p>Все права защищены</p>
              <p>Разработка дизайна</p>
            </div>
          </div>
          <div className="inner__right">
            <div className="inner__right__top">
              <div className="top__top">
                <p>
                  Подпишитесь на рассылку и первыми получайте информацию о{" "}
                  <br />
                  новинках, скидках и специальных предложениях
                </p>
              </div>
              <div className="top__bottom">
                <input type="email" placeholder="Введите ваш E-mail" />
                <Link className="podpisatsiya">подписаться</Link>
              </div>
            </div>
            <div className="inner__right__bottom">
              <div className="footer__links_card">
                <div className="links__top">Каталог</div>
                <div className="links__bottom">
                  <Link className="link">Новинки</Link>
                  <Link className="link">Распродажа</Link>
                  <Link className="link">Готовые образы</Link>
                  <Link className="link">Все товары</Link>
                </div>
              </div>

              <div className="footer__links_card">
                <div className="links__top">Покупателям</div>
                <div className="links__bottom">
                  <Link className="link">Личный кабинет</Link>
                  <Link className="link">Таблица размеров</Link>
                  <Link className="link">Доставка и оплата</Link>
                  <Link className="link">Возврат</Link>
                </div>
              </div>

              <div className="footer__links_card">
                <div className="links__top">О нас</div>
                <div className="links__bottom">
                  <Link className="link">О бренде</Link>
                  <Link className="link">Контакты</Link>
                  <Link className="link">Оферта</Link>
                  <Link className="link">Политика конфиденциальности</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
