import React from "react";
import "./About.scss";

import Footer from "../../components/Footer/Footer";
import Instablog from "../Home/components/InstaBlog/Instablog";
const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__loylen">
          <div className="about__loylen__left">
            <div className="loylen__left__inner">
              <div className="inner__title">
                <h2>о бренде Loylen</h2>
              </div>
              <div className="inner__subtitle_01">
                <p>
                  Бренд LOYLEN – одежда для тех, кто любит сочетать разные
                  стили. С 2020 года мы создаем спортивные, классические и
                  повседневные коллекции одежды для женщин. Это позволяет каждой
                  женщине сочетать разные элементы гардероба и создать для себя
                  уникальный образ на разные случаи жизни.
                </p>
              </div>
              <div className="inner__subtitle_02">
                <p>
                  LOYLEN любят за качество и натуральные ткани от турецких и
                  итальянских фабрик. Вся одежда изготавливается преимущественно
                  из хлопка, шерсти, льна, за которыми легко ухаживать
                </p>
              </div>
              <div className="inner__subtitle_03">
                <p>
                  У нас свое собственное производство – начиная от лекал,
                  разработки образцов и пошива партии. Все модели создаются по
                  современным трендам и предпочтениям наших клиентов. Одежда
                  LOYLEN станет для вас воплощением всех ваших лучших образов
                </p>
              </div>
            </div>
          </div>
          <div className="about__loylen__right">
            {/* <img src={about1} alt="about1" /> */}
          </div>
        </div>
        <div className="about__forwhoom">
          <div className="about__forwhoom__left"></div>
          <div className="about__forwhoom__right">
            <div className="forwhoom__inner">
              <div className="inner__title">
                <h2>Для кого</h2>
              </div>
              <div className="inner__subtitle_01">
                <p>
                  Одежда бренда LOYLEN за счет своей универсальности – отличный
                  вариант для девушек разных возрастных категорий. Нас выбирают
                  модницы от 20 до 50 лет, которые хотят создать стильный образ
                  для любого случая жизни
                </p>
              </div>
              <div className="inner__subtitle_02">
                <p>
                  LOYLEN ценят за высокое качество одежды, удобство в носке и
                  приемлемые цены. Благодаря собственному производству лекала
                  получаются с идеальной посадкой и смотрятся идеально на разных
                  типах фигуры. Одежду легко сочетать, можно комбинировать
                  разные стили
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about__technical__produce">
          <div className="about__technical__produce__left">
            <div className="produce__left__inner">
              <div className="produce__inner__title">
                <h2>техника Производства</h2>
              </div>
              <div className="produce__inner__subtitle_01">
                <p>
                  LOYLEN – это не только онлайн-магазин, но и собственная
                  фабрика по производству одежды. Над каждой модной коллекцией
                  трудятся дизайнер, модельер-конструктор, технолог,
                  внимательный к деталям закройщик и портной
                </p>
              </div>
              <div className="produce__inner__subtitle_02">
                <p>
                  Эта команда специалистов имеют большой опыт в легкой
                  промышленности и создании одежды. Именно поэтому все модели
                  получаются идеальными в посадке, утонченными и удобными в
                  носке
                </p>
              </div>
            </div>
          </div>
          <div className="about__technical__produce__right"></div>
        </div>
      </div>
      <Instablog />
      <Footer />
    </div>
  );
};

export default About;
