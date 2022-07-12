import styles from "./Item.module.scss";
import Image from "next/image";
import BlogImage from "../../../assets/images/page/01.png";
import Link from "next/link";

import { Data_Blog } from "../../../data/index"

export default function BlogItem({item}) {
    const category = Data_Blog.categories.find((x) => x.id === item.category);
    return (
        <div className={styles["blog__item"]}>
            <Image
                src={BlogImage}
                alt={"Blog"}
                layout="responsive"
            />
            <div className={styles["blog__item-content"]}>
                <div className={styles["blog__item-property"]}>
                    <span>{ item.date }</span>
                    <span>
                        <Link href={"/blog/" + category.link}>
                            <a>{ category.title }</a>
                        </Link>
                    </span>
                </div>
                <h2>{ item.title }</h2>
                <p>{ item.description }</p>
                <Link href={"/blog/" + item.link }><a className="button button--black">Continue</a></Link>
            </div>
        </div>
    )
}