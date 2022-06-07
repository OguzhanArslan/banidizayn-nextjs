import styles from "./List.module.scss";
import ProductItem from "../Item/Item";

import { Data_Product } from "../../../data/index"

export default function ProductList() {

    return (
        <div className={styles["product"]}>  
            <ProductItem items={Data_Product}/>
        </div>
    )
}

