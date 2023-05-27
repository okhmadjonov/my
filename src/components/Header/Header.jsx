import React, { useState } from "react";

import { Link } from "react-router-dom";
import i18next from "i18next";
import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import { CiUser, CiSearch, CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import "./Header.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive((current) => !current);
  };
  const { t } = useTranslation();
  const handleLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  const [count, setCount] = useState(0);
  let step1 = false,
    step2 = false,
    step3 = false,
    step4 = false;

  switch (count) {
    case 1:
      step1 = true;
      break;
    case 2:
      step2 = true;
      break;
    case 3:
      step3 = true;
      break;
    case 4:
      step4 = true;
      break;

    default:
      step1 = false;
      step2 = false;
      step3 = false;
      step4 = false;
  }

  return (
    <div className="header">
      <div className="header__top">
        <div className="header_info">
          <p>{t("headerTitle.0")}</p>
        </div>
        <div className="language">
          <Link className="len" onClick={() => handleLanguage("uz")}>
            Uz
          </Link>
          <Link className="len" onClick={() => handleLanguage("ru")}>
            Ru
          </Link>
          <Link className="len" onClick={() => handleLanguage("en")}>
            En
          </Link>
        </div>
      </div>
      <div className="header__container">
        <div className="header__inner">
          <div className="menu">
            <Link
              to="/catalog"
              onClick={() => setCount(1)}
              className={step1 ? "menu_link_active" : "menu_link"}>
              {t("headerTitle.1")}
            </Link>
            <Link
              to="/lookbook"
              className={step2 ? "menu_link_active" : "menu_link"}
              onClick={() => setCount(2)}>
              {t("headerTitle.2")}
            </Link>
            <Link
              to="/about"
              className={step3 ? "menu_link_active" : "menu_link"}
              onClick={() => setCount(3)}>
              {t("headerTitle.3")}
            </Link>
            <Link
              to="/information"
              className={step4 ? "menu_link_active" : "menu_link"}
              onClick={() => setCount(4)}>
              {t("headerTitle.4")}
            </Link>
          </div>
          <div className="logo">
            <Link className="logo_blog" to="/">
              <LogoSvg />
            </Link>
          </div>
          <div className="header__custom">
            <div className="search">
              <input
                type="text"
                className={active ? "search__field__active" : "search__field"}
                placeholder="Search..."
              />
              <CiSearch onClick={handleActive} />
            </div>
            <div className="user">
              <CiUser />
            </div>
            <div className="like">
              <CiHeart />
            </div>
            <div className="card">
              {/* <BsBag /> */}
              <BsBag />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
