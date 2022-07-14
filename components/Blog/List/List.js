import styles from "./List.module.scss";

import BlogItem from "../Item/Item"

export default function List({list}) {
    return (<div className={styles.blog}>
        <div className="container">
            <div className="row">
                { list.items.map((item) => (<BlogItem item={item} />)) }
            </div>
        </div>
    </div>)
}