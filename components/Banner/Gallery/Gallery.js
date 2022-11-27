import React from "react";
import Slider from "react-slick";
import Image from "next/image"
import styles from "./Gallery.module.scss"

export default function Gallery({  items }) {
    const slider = React.useRef(null);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className={styles.gallery}>
            <Slider ref={slider} {...settings}>
                { items.map(item => {
                    const image = require('../../../assets/images/gallery/' + item.image + '.png');
                    return (
                        <div className={styles["gallery__item"]}>
                            <img src={image.default.src} alt={item.title} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}