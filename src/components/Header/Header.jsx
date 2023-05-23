import React from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import { CiUser, CiSearch, CiHeart, CiBag1 } from "react-icons/ci";

import "./Header.scss";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
  const handleLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };
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
            <Link className="menu_link">{t("headerTitle.1")}</Link>
            <Link className="menu_link">{t("headerTitle.2")}</Link>
            <Link className="menu_link">{t("headerTitle.3")}</Link>
            <Link className="menu_link">{t("headerTitle.4")}</Link>
          </div>
          <div className="logo">
            <Link className="logo_blog" to="/">
              <LogoSvg />
            </Link>
          </div>
          <div className="header__custom">
            <div className="search">
              <CiSearch />
            </div>
            <div className="user">
              <CiUser />
            </div>
            <div className="like">
              <CiHeart />
            </div>
            <div className="card">
              {/* <BsBag /> */}
              <CiBag1 />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
