import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import classnames from "classnames"

import styles from "./Header.module.scss"
import Logo from "../../../assets/images/logo.svg"

export default function Header(props) {
    const { data } = props;
    const [navStatus, setNavStatus] = useState(false);
    
    return <>
        <header className={classnames({
               [styles["header"]]: true,
               [styles["header--open"]]: navStatus
            })}>
            <div className={styles["header__top"]}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 d-flex">
                            {data.top.left.map((left, index) => (
                                <p key={index} className={styles["header__top-text"]}>
                                    <i className={`icon-${left.icon}`}></i>
                                    <a href={left.href}>{left.text}</a>
                                </p>
                            ))}
                        </div>
                        <div className="col-12 col-md-4">
                            {data.top.right.map((right) => (
                                <p className={`${styles["header__top-text--right"]} ${styles["header__top-text"]}`}>{right.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles["header__bottom"]}>
                    <Link href="/">
                        <a className={styles["header__logo"]}>
                            <Image
                                src={Logo}
                                alt="BANI DESIGN"
                                width={120}
                                height={120}
                            />
                        </a>
                    </Link>
                    <button className={styles["header__nav"]} onClick={() => setNavStatus(!navStatus)}><span></span></button>
                    <ul className={styles["header__menu"]}>
                        {data.menu.map((menu, index) => (
                            <li key={index} className={styles["header__menu-item"]}>
                                <Link href={menu.href}>
                                    <a className={styles["header__menu-link"]}>{menu.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    </>
}