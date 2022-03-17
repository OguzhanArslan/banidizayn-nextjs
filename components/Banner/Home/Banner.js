import React from "react";
import Slider from "react-slick";
import Image from "next/image"
import Logo from "../../../assets/images/logo.png"

export default function SimpleSlider(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
        <Slider className="promo" {...settings}>
            { props.items.map(item => {
                const image = require('../../../assets/images/promo/' + item.image + '.jpg');
                return (
                    <div className="promo__item">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <Image
                            src={image}
                            alt={item.title}
                            width={100}
                            height={745}
                        />
                    </div>
                )
            })}
        </Slider>
  );
}