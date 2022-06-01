import styles from "./Item.module.scss";
import Image from "next/image";
import BlogImage from "../../../assets/images/page/01.png";

export default function BlogItem() {
    return (
        <div className={styles["blog__item"]}>
            <Image
                src={BlogImage}
                alt={"Blog"}
                layout="responsive"
            />
            <h2 className={styles["blog__item-title"]}>deneme</h2>
        </div>
    )
}