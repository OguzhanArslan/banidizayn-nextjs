import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./About.module.scss"

export default function HomeAbout(props) {
    const AboutBg = require('../../../assets/images/home/' + props.data.bg + '.jpg');
    const AboutImg = require('../../../assets/images/home/' + props.data.image + '.jpg');

    return (
        <div className={styles["home__about"]}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <Image
                            src={AboutImg}
                            alt={"About"}
                        />
                    </div>
                    <div className="col-12 col-md-5">
                        <div className={styles["home__about-content"]} style={{backgroundImage: `url(${AboutBg.default.src})`}}>
                            <div className={styles["home__about-text"]}>
                                <h2 className={styles["home__about-text-title"]}>{props.data.title}</h2>
                                <p className={styles["home__about-text-description"]}>{props.data.description}</p>
                                <Link href={props.data.link.href}><a className="button button--black">{props.data.link.text}</a></Link>
                            </div>
                            <div className={styles["home__about-comment"]}>
                                <p className={styles["home__about-comment-text"]}>{props.data.comment.text}</p>
                                <p className={styles["home__about-comment-name"]}>{props.data.comment.name}</p>
                                <p className={styles["home__about-comment-description"]}>{props.data.comment.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}