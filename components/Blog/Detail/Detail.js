import styles from "./Detail.module.scss";
import Image from "next/image";
import BlogImage from "../../../assets/images/page/01.png";
import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";

export default function BlogDetail({item}) {
    console.log('item', item)
    return (<div className={styles.blog}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-8">
                    <div className={styles["blog__detail"]}>
                        <Image
                            src={BlogImage}
                            alt={"Blog"}
                            layout="responsive"
                        />
                        <div className={styles["blog__detail-content"]}>
                            <div className={styles["blog__detail-property"]}>
                                <span>February 25, 2022</span>
                                <span>
                                    <Link href={"/"}>
                                        <a>Building</a>
                                    </Link>
                                </span>
                            </div>
                            <h2>Antonio Sanchez is the design winner in Japan</h2>
                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}