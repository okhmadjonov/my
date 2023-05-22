import React from "react";
import { Link } from "react-router-dom";

import { CiUser, CiSearch, CiHeart, CiBag1 } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="language">
          <Link className="len">Uz</Link>
          <Link className="len">Ru</Link>
          <Link className="len">En</Link>
        </div>
      </div>
      <div className="header__container">
        <div className="header__inner">
          <div className="menu">
            <Link className="menu_link">Каталог</Link>
            <Link className="menu_link">lookbook</Link>
            <Link className="menu_link">О бренде</Link>
            <Link className="menu_link">информация</Link>
          </div>
          <div className="logo">
            <Link className="logo_blog" to="/">
              My
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
