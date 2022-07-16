import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./WhyUs.module.scss"

import WhyUsImage from "../../../assets/images/home/whyus.jpg"
import List from "../../List/List"

var listData = ["High quality", "Easy and fast application", "Stylish appearance", "Respect for nature", "Professional team", "Technical support"]
var listDataTwo = ["Quick and easy Installation", "UV resistant", "Environmentally friendly", "Scratch resistant", "Easy to clean", "Does not stain"]

export default function HomeWhyUs(props) {
    return (
        <div className={styles["home__whyus"]}>
            <div className="container">
                <div className="row justify-beetween align-items-center">
                    <div className="col-12 col-md-7">
                        <h2>Why us?</h2>
                        <List data={listData} />
                        <h2>Why wood profile?</h2>
                        <List data={listDataTwo} />
                    </div>
                    <div className="col-12 col-md-5 text-right">
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