import React from "react"
import styles from "./Service.module.scss"
import ServiceBg from "../../../assets/images/home/service-bg.jpg"

function Service(props){
    return (
        <div className={styles["home__service"]} style={{backgroundImage: `url(${ServiceBg.src})`}}>
            <div className="container">
                <div className={styles["home__service-title"]}>
                    <h2>Our Services</h2>
                    <p>It is a long established fact that a reader will be distracted.</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className={styles["home__service-item"]}>
                            <h3>Interior Designs</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                            <a href="">READ MORE <i className="icon-more"></i></a>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles["home__service-item"]}>
                            <h3>Interior Designs</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                            <a href="">READ MORE <i className="icon-more"></i></a>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles["home__service-item"]}>
                            <h3>Interior Designs</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                            <a href="">READ MORE <i className="icon-more"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service