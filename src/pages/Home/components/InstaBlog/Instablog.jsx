import React from "react";
import inst1 from "../../../../assets/img/insta1.png";
import inst2 from "../../../../assets/img/insta2.png";
import inst3 from "../../../../assets/img/insta3.png";
import inst4 from "../../../../assets/img/insta4.png";
import "./Instablog.scss";
const Instablog = () => {
  return (
    <div className="instablog">
      <div className="instablog__container">
        <div className="inst__top">
          <h3>НАШ ИНСТАГРАМ</h3>
          <p>@loylen_brand</p>
        </div>
        <div className="inst__bottom">
          <div className="inst__card">
            <div className="inst__title">
              <p>ПЕРЕЙТИ В ИНСТАГРАМ</p>
            </div>
            <img src={inst1} alt="Insta 1" />
          </div>
          <div className="inst__card">
            <div className="inst__title">
              <p>ПЕРЕЙТИ В ИНСТАГРАМ</p>
            </div>
            <img src={inst2} alt="Insta 2" />
          </div>
          <div className="inst__card">
            <div className="inst__title">
              <p>ПЕРЕЙТИ В ИНСТАГРАМ</p>
            </div>
            <img src={inst3} alt="Insta 3" />
          </div>
          <div className="inst__card">
            <div className="inst__title">
              <p>ПЕРЕЙТИ В ИНСТАГРАМ</p>
            </div>
            <img src={inst4} alt="Insta 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instablog;
