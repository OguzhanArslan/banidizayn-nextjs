import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Team.module.scss"
import TeamBg from "../../../assets/images/home/team-bg.jpg"

export default function HomeTeam(props) {
    return (
        <div className={styles["home__team"]} style={{backgroundImage: `url(${TeamBg.src})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-7">
                        <h2 className={styles["home__team-title"]}>Professional teams</h2>
                        <p className={styles["home__team-description"]}>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <a href="#" className="button button--white">Learn More</a>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className={styles["home__team-list"]}>
                            <div className={styles["home__team-item"]}>
                                <div className={styles["home__team-circle"]}>
                                    <span>90%</span>
                                </div>
                                <div className={styles["home__team-text"]}>
                                    Clients Statisfied
                                </div>
                            </div>
                            <div className={styles["home__team-item"]}>
                                <div className={styles["home__team-circle"]}>
                                    <span>95%</span>
                                </div>
                                <div className={styles["home__team-text"]}>
                                    Projects Success
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}