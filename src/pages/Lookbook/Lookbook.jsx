import React from "react";
// import lookbook1 from "../../assets/img/lookbook1.png";
// import lookbook2 from "../../assets/img/lookbook2.png";
// import lookbook3 from "../../assets/img/lookbook3.png";
// import lookbook4 from "../../assets/img/lookbook4.png";
// import lookbook5 from "../../assets/img/lookbook5.png";
// import lookbook6 from "../../assets/img/lookbook6.png";
import "./Lookbook.scss";
import Footer from "../../components/Footer/Footer";

const Lookbook = () => {
  return (
    <div className="lookbook">
      <div className="lookbook__container">
        <div className="layer_one">
          <div className="layer_one_left">
            {/* <div className="layer__one__left__inner"> */}
            <div className="layer__one__left__top">
              <p style={{ textTransform: "uppercase" }}>от LOYLEN</p>
              <h2>LOOKBOOK</h2>
              <p>Неповторимые образы, подобранные специально для вас</p>
            </div>
            <div className="layer__one__left__bottom">
              <div className="bottom__top"></div>
              <div className="bottom__bottom">
                <p>
                  Классическая рубашка 3000 ₽ <br />
                  Брюки с ремнем 3000 ₽
                </p>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="layer_one_right">
            <div className="right__inner__top"></div>
            <div className="right__inner__bottom">
              <p>Комбинезон 8000 ₽</p>
            </div>
          </div>
        </div>{" "}
        {/* Layer one done */}
        <div className="layer__two">
          <div className="layer__two__inner">
            <div className="two__inner__top"></div>
            <div className="two__inner__bottom">
              <p>
                Классическая рубашка 3000 ₽ <br />
                Брюки с ремнем 3000 ₽
              </p>
            </div>
          </div>
        </div>
        {/* Layer two end */}
        <div className="layer__three">
          <div className="layer__three__left">
            <div className="layer__three__left__img"></div>
            <div className="layer__three__left__nameprice">
              <p>Комбинезон 8000 ₽</p>
            </div>
          </div>
          <div className="layer__three__right">
            <div className="layer__three__right__img"></div>
            <div className="layer__three__right__nameprice">
              <p>
                Классическая рубашка 3000 ₽ <br />
                Брюки с ремнем 3000 ₽
              </p>
            </div>
          </div>
        </div>
        <div className="fourth__layer">
          <div className="fourth__layer__inner">
            <div className="fourth__layer__inner__img"></div>
            <div className="fourth__layer__inner__nameprice">
              <p>
                Классическая рубашка 3000 ₽ <br /> Брюки с ремнем 3000 ₽
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Lookbook;
