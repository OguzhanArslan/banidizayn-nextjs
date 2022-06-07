import styles from "./Item.module.scss";
import Image from "next/image";
import ProductImage from "../../../assets/images/product/01.jpg";


export default function ProductItem(props) {
    const { items } = props;

    return (
        <div className="container"> 
            { items.map(item => {
            const image = require('../../../assets/images/product/' + item.image + '.jpg');
                return (  
                    <div className={styles["product__contain"] }>
                        <div className={styles["product__contain-reverse"]}>
                            <div className={styles["product__contain-detail"]}>
                                <h2 className={styles["product__contain-detail-title"]}>{item.title}</h2>
                                <p className={styles["product__contain-detail-content"]}>{item.content}</p>
                                <a href={item.link} className={styles["product__contain-detail-link"]}><i className={`icon-right ${styles["product__contain-detail-link-icon"]}`}></i></a>
                            </div>
                            <div className={styles["product__contain-image"]}>
                            
                                <Image
                                    src={image}
                                    alt={"Product"}
                                    width={960}
                                    height={745}
                            />
                        </div>
                    </div>
                </div>
                )
            })}
        </div>

    )
}