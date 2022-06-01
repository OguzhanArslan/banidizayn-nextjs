import Link from "next/link"
import Image from "next/image"

import styles from "./Footer.module.scss"
import Logo from "../../../assets/images/logo-white.svg"

export default function Footer(props) {
    const { data } = props;

    return <>
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Link href="/">
                            <a className={styles["footer__logo"]}>
                                <Image
                                    src={Logo}
                                    alt="BANI DESIGN"
                                    width={120}
                                    height={120}
                                />
                            </a>
                        </Link>
                        <p className={styles["footer__text"]}>{ data.about }</p>
                        <ul className={styles["footer__social"]}>
                            { data.social.map((social, index) => (
                                <li key={index} className={styles["footer__social-item"]}>
                                    <a href={social.href} className={styles["footer__social-link"]} target="_blank"><i className={`icon-${social.icon}`}></i></a>
                                </li>
                            )) }
                        </ul>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            { data.menu.map((menu) => (
                                <div className={`col-12 col-md-${menu.big ? '4' : '3'}`}>
                                    <h3 className={styles["footer__title"]}>{menu.title}</h3>
                                    <ul className={styles["footer__menu"]}>
                                        {menu.links.map((link) => (
                                            <li className={styles["footer__menu-item"]}>
                                                <Link href={link.href}>
                                                    <a className={styles["footer__menu-link"]}>{link.text}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )) }
                            <div className="col-12 col-md-5">
                                <h3 className={styles["footer__title"]}>{ data.contact.title }</h3>
                                <ul className={styles["footer__info"]}>
                                    { data.contact.items.map((item) => {
                                        if(item.href) {
                                            return (
                                                <li className={styles["footer__info-item"]}>
                                                    <i className={`icon-${item.icon}`}></i>
                                                    <a href={item.href} className={styles["footer__info-link"]}>{item.text}</a>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li className={styles["footer__info-item"]}>
                                                    <i className={`icon-${item.icon}`}></i>
                                                    <p className={styles["footer__info-link"]}>{item.text}</p>
                                                </li>  
                                            )
                                        }
                                    }) }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["footer__bottom"]}>
                    <p className={styles["footer__copy"]}>{ data.copyright }</p>
                </div>
            </div>
        </footer>
    </>
}