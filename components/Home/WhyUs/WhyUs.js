import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./WhyUs.module.scss"
import classnames from "classnames"

import WhyUsImage from "../../../assets/images/home/whyus.jpg"
import List from "../../List/List"

var listData = ["High quality", "Easy and fast application", "Stylish appearance", "Respect for nature", "Professional team", "Technical support"]
var listDataTwo = ["Quick and easy Installation", "UV resistant", "Environmentally friendly", "Scratch resistant", "Easy to clean", "Does not stain"]

export default function HomeWhyUs(props) {
    return (
        <div className={styles["home__whyus"]}>
            <div className="container">
                <div className={classnames({
                    ["row justify-beetween align-items-center"]: true,
                    [styles["home__whyus-row"]]: true
                })}>
                    <div className="col-12 col-lg-7">
                        <h2>Why us?</h2>
                        <List data={listData} />
                        <h2>Why wood profile?</h2>
                        <List data={listDataTwo} />
                    </div>
                    <div className={classnames({
                        ["col-12 col-lg-5 text-right"]: true,
                        [styles["home__whyus-img"]]: true
                    })}>
                        <Image
                            fill
                            src={WhyUsImage}
                            alt={"Why Us"}
                            sizes='100vw'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}