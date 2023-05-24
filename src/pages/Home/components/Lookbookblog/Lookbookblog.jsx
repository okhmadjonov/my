import React from "react";
import "./Lookbookblog.scss";
import { Link } from "react-router-dom";
const Lookbookblog = () => {
  return (
    <div className="lookbook">
      <div className="lookbook__container">
        <div className="lookbook__img"></div>
        <div className="lookbook__description">
          <div className="lookbook__inner">
            <div className="lookbook__title">
              <h2 className="title">Lookbook</h2>
            </div>
            <div className="lookbook__subtitle">
              <p>
                При создании коллекций мы учитываем, чтобы все изделия
                сочетались. Это позволяет подобрать полный образ на все случаи
                жизни
                <br />
                Скидка 10% при покупке полного образа
              </p>
            </div>
            <div className="lookbook__smotret">
              <Link className="smotret">Смотреть</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookbookblog;
