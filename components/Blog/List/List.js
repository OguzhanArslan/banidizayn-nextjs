import styles from "./List.module.scss";

import BlogItem from "../Item/Item"
import Sidebar from "../Sidebar/Sidebar"

export default function List({list}) {
    return (<div className={styles.blog}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-8">
                    { list.items.map((item) => (<BlogItem item={item} />)) }
                </div>
            </div>
        </div>
    </div>)
}