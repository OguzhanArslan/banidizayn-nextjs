import styles from "./Detail.module.scss";
import Image from "next/image";
import BlogImage from "../../../assets/images/page/01.png";
import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";

import { Data_Blog } from "../../../data/index"

export default function BlogDetail({item}) {
    const category = Data_Blog.categories.find((x) => x.id === item.category);
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
                                <span>{ item.date }</span>
                                <span>
                                    <Link href={"/blog/" + category.link}>
                                        <a>{ category.title }</a>
                                    </Link>
                                </span>
                            </div>
                            <h2>{item.title}</h2>
                            {<div dangerouslySetInnerHTML={{ __html: item.content }} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}