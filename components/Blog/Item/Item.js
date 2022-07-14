import styles from "./Item.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function BlogItem({item}) {
    const image = require('../../../assets/images/blog/' + item.image);
    return (
        <div className="col-12 col-md-6">
            <div className={styles["blog__item"]}>
                <Image
                    src={image}
                    alt={"Blog"}
                    layout="responsive"
                />
                <div className={styles["blog__item-content"]}>
                    <div className={styles["blog__item-property"]}>
                        <span>{ item.date }</span>
                    </div>
                    <h2>{ item.title }</h2>
                    <p>{ item.description }</p>
                    <Link href={"/blog/" + item.link }><a className="button button--black">Continue</a></Link>
                </div>
            </div>
        </div>
    )
}