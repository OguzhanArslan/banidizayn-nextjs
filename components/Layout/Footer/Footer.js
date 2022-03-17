import Link from "next/link"
import Image from "next/image"

import Logo from "../../../assets/images/logo-white.png"

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Link href="/">
                            <a className="footer__logo">
                                <Image
                                    src={Logo}
                                    alt="BANI DESIGN"
                                    width={160}
                                    height={72}
                                />
                            </a>
                        </Link>
                        <p className="footer__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <ul className="footer__social">
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link" target="_blank"><i className="icon-facebook"></i></a>
                            </li>
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link" target="_blank"><i className="icon-twitter"></i></a>
                            </li>
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link" target="_blank"><i className="icon-linkedin"></i></a>
                            </li>
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link" target="_blank"><i className="icon-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <h3 className="footer__title">Site Links</h3>
                                <ul className="footer__menu">
                                    <li className="footer__menu-item">
                                        <Link href="/">
                                            <a className="footer__menu-link">About Us</a>
                                        </Link>
                                    </li>
                                    <li className="footer__menu-item">
                                        <Link href="/">
                                            <a className="footer__menu-link">Our Services</a>
                                        </Link>
                                    </li>
                                    <li className="footer__menu-item">
                                        <Link href="/">
                                            <a className="footer__menu-link">Our Teams</a>
                                        </Link>
                                    </li>
                                    <li className="footer__menu-item">
                                        <Link href="/">
                                            <a className="footer__menu-link">Projects Gallery</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-4">
                                <h3 className="footer__title">Explore Links</h3>
                                <ul className="footer__menu">
                                    <li className="footer__menu-item">
                                        <Link href="/">
                                            <a className="footer__menu-link">Contact Us</a>
                                        </Link>
                                    </li>
                                    <li className="footer__menu-item">
                                        <Link href="/">
                                            <a className="footer__menu-link">Pricing Table</a>
                                        </Link>
                                    </li>
                                    <li className="footer__menu-item">
                                        <Link href="/">
                                            <a className="footer__menu-link">Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li className="footer__menu-item">
                                        <Link href="/">
                                            <a className="footer__menu-link">Privacy policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-5">
                                <h3 className="footer__title">Contact Site</h3>
                                <ul className="footer__info">
                                    <li className="footer__info-item">
                                        <i className="icon-map"></i>
                                        <p className="footer__info-link">Company No. 08116577, 101 Baker Street, New York, 12345, USA.</p>
                                    </li>
                                    <li className="footer__info-item">
                                        <i className="icon-phone"></i>
                                        <a href="tel:+896 120 5889" className="footer__info-link">+896 120 5889</a>
                                    </li>
                                    <li className="footer__info-item">
                                        <i className="icon-email"></i>
                                        <a href="mailto:mail@company.com" className="footer__info-link">mail@company.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__copy">© Copyright 2022 by Architeque - Services site part of JW-Construction .co .ltd</p>
                </div>
            </div>
        </footer>
    </>
}