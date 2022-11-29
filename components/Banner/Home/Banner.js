import React from "react";
import Slider from "react-slick";
import classnames from "classnames";
import Image from "next/image";
import styles from "./Banner.module.scss";

export default function Banner(props) {
  const { items } = props;
  const slider = React.useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true
  };

  return (
    <div className={styles.promo}>
      <Slider ref={slider} {...settings}>
        {items.map((item, index) => {
          const image = require("../../../assets/images/promo/" + item.image);
          return (
            <div key={index}>
              <div className={styles["promo__item"]}>
                <div
                  className={classnames({
                    ["container"]: true,
                    [styles["promo__container"]]: true,
                  })}
                >
                  <div className={styles["promo__item-content"]}>
                    <h2 className={styles["promo__item-title"]}>{item.title}</h2>
                    <p className={styles["promo__item-description"]}>{item.description}</p>
                  </div>
                </div>
                <div className={styles["promo__item-img"]}>
                  <Image src={image} alt={item.title} width={960} height={745} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div
        className={classnames({
          ["container"]: true,
          [styles["promo__container"]]: true,
        })}
      >
        <div className={styles["promo__arrow"]}>
          <button className={styles["promo__arrow-btn"]} onClick={() => slider?.current?.slickPrev()}>
            <i className={`icon-left ${styles["promo__arrow-icon"]}`}></i>
          </button>
          <button className={styles["promo__arrow-btn"]} onClick={() => slider?.current?.slickNext()}>
            <i className={`icon-right ${styles["promo__arrow-icon"]}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
