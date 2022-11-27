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
                    <div className="col-12 col-lg-4">
                        <div className={styles["home__service-item"]}>
                            <h3>Application</h3>
                            <p>We apply  wall profiles, where you can see different color and model options from our catalog, together with our professional team.</p>
                            <a href="">READ MORE <i className="icon-more"></i></a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className={styles["home__service-item"]}>
                            <h3>Sale</h3>
                            <p>We also sell our products that can be easily installed with puzzle technique. We deliver our products you have selected from the catalog section to you as soon as possible.</p>
                            <a href="">READ MORE <i className="icon-more"></i></a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className={styles["home__service-item"]}>
                            <h3>Technical Service</h3>
                            <p>We are always with you in case of technical problems that may occur after the application or sales. In addition to being available at any time, we eliminate potential problems as soon as possible.</p>
                            <a href="">READ MORE <i className="icon-more"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service