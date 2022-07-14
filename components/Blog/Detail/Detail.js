import styles from "./Detail.module.scss";
import Image from "next/image";

export default function BlogDetail({item}) {
    const image = require('../../../assets/images/blog/' + item.image);
    return (<div className={styles.blog}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className={styles["blog__detail"]}>
                        <Image
                            src={image}
                            alt={"Blog"}
                            layout="responsive"
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className={styles["blog__detail"]}>
                        <div className={styles["blog__detail-content"]}>
                            <div className={styles["blog__detail-property"]}>
                                <span>{ item.date }</span>
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