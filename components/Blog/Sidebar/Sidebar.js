import styles from "./Sidebar.module.scss";
import Link from "next/link";

export default function Sidebar() {
    return (<div className={styles.blog__sidebar}>
        <h2 className={styles["blog__sidebar-title"]}>Blog Categories</h2>
        <div className={styles["blog__sidebar-links"]}>
            <Link href={"/"}>
                <a className={styles["blog__sidebar-link"]}>Building</a>
            </Link>
            <Link href={"/"}>
                <a className={styles["blog__sidebar-link"]}>Green</a>
            </Link>
            <Link href={"/"}>
                <a className={styles["blog__sidebar-link"]}>Smart</a>
            </Link>
        </div>
    </div>)
}