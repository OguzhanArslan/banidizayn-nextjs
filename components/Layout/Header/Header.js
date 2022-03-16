import Link from "next/link"
import Image from "next/image"

import Logo from "../../../assets/images/logo.png"

export default function Header() {
    return <>
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex">
                            <p>
                                <i className="icon-email"></i>
                                <a href="mailto:mail@yourcompany.com">mail@yourcompany.com</a>
                            </p>
                            <p>
                                <i className="icon-phone"></i>
                                <a href="tel:+896 120 5889">+896 120 5889 (Toll free)</a>
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="text-right">Mon - Sat | 10am - 7pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="header__bottom">
                    <Link href="/">
                        <a className="header__logo">
                            <Image
                                src={Logo}
                                alt="BANI DESIGN"
                                width={160}
                                height={72}
                            />
                        </a>
                    </Link>
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <Link href="/">
                                <a className="header__menu-link">Home</a>
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link href="/about-us">
                                <a className="header__menu-link">About</a>
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link href="/services">
                                <a className="header__menu-link">Services</a>
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link href="/portfolio">
                                <a className="header__menu-link">Portfolio</a>
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link href="/blog">
                                <a className="header__menu-link">Blog</a>
                            </Link>
                        </li>
                    </ul>
                    <a href="" className="button button--default">Let’s Start</a>
                </div>
            </div>
        </header>
    </>
}