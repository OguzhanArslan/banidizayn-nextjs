import styles from "./List.module.scss";

import BlogItem from "../Item/Item"
import Link from "next/link";

export default function List() {
    return (<div className={styles.blog}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className={styles.blog__sidebar}>
                        <h2 className={styles["blog__sidebar-title"]}>Blog Categories</h2>
                        <div classname={styles["blog__sidebar-links"]}>
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
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <BlogItem />
                </div>
            </div>
        </div>
    </div>)
}