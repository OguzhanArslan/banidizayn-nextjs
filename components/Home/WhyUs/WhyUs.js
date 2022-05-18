import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./WhyUs.module.scss"

import WhyUsImage from "../../../assets/images/home/whyus.jpg"
import List from "../../List/List"

var listData = ["Profesional works", "Best value solutions", "100% Guarantee", "High professional teams", "Profesional teams", "Architecture licensed"]

export default function HomeWhyUs(props) {
    return (
        <div className={styles["home__whyus"]}>
            <div className="container">
                <div className="row justify-beetween align-items-center">
                    <div className="col-12 col-md-7">
                        <h2>Why us?</h2>
                        <List data={listData} />
                        <p><strong>We’re committed to delivering eye-catching architect designs</strong></p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Image
                            src={WhyUsImage}
                            alt={"Why Us"}
                            width={513}
                            height={579}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}