
import styles from "./List.module.scss";

import BlogItem from "../Item/Item";

export default function BlogList() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-3">
                    fas
                </div>
                <div className="col-12 col-sm-9">
                    <BlogItem />
                </div>
            </div>
        </div>
    )
}