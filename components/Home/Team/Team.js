import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Team.module.scss"
import TeamBg from "../../../assets/images/home/team-bg.jpg"

export default function HomeTeam(props) {
    return (
        <div className={styles["home__team"]} style={{backgroundImage: `url(${TeamBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <h2 className={styles["home__team-title"]}>Professional teams</h2>
                        <p className={styles["home__team-description"]}>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <a href="#" className="button button--white">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}