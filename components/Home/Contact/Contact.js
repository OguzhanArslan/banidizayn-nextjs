import React from "react"
import styles from "./Contact.module.scss"
import ContactBg from "../../../assets/images/home/contact-bg.jpg"

function Contact(props){
    return (
        <div className={styles["home__contact"]} style={{backgroundImage: `url(${ContactBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h2>Architeque</h2>
                    </div>
                    <div className="col-7">
                        <p>We’re committed to delivering eye-catching architect designs</p>
                    </div>
                    <div className="col-3">
                        <a href={""} className="button button--white">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact