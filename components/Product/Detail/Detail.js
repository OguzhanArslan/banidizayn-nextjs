import styles from "./Detail.module.scss";
import Link from "next/link"


export default function ProductDetail({image}) {
    const PageImg = require('../../../assets/images/product/' + image + '.jpg');

    return (
        <div className="container">  
            <div className={`row ${styles["product__detailpage"]}`}>
                <div className={`col-4 ${styles["product__detailpage-container"]}`}>
                    <div className={styles["product__detailpage-container-title"]}>
                        <p>DUVAR PROFİLLERİ</p>     
                    </div>
                    <div className={styles["product__detailpage-container-maintitle"]}>
                        <h2>Uygulama Örnekleri</h2>
                    </div>
                    <div className={styles["product__detailpage-container-detail"]} style={{backgroundImage: `url(${PageImg.default.src})`}}>
                        <Link href="/">
                            <a className={styles["product__detailpage_container-detail-link"]}>
                               
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`col-4 ${styles["product__detailpage-container"]}`}>
                    <div className={styles["product__detailpage-container-detail"]} style={{backgroundImage: `url(${PageImg.default.src})`}}>
                        <Link href="/">
                            <a className={styles["product__detailpage-container-detail-link"]}>
                                
                            </a>
                        </Link>
                    </div>
                    <div className={styles["product__detailpage-container-contents"]}>
                    <p>Acarkon duvar profilleriyle yaşam dolu detaylar sizlerle. Kendinize özgü olan bu dekoratif detayla ilgi çekici ve sıra dışı ofislere sahip olacaksınız.</p>
                    </div>
                </div>
                <div className={`col-4 center ${styles["product__detailpage-container"]}`}>
                    <div className={styles["product__detailpage-container-detail"]} style={{backgroundImage: `url(${PageImg.default.src})`}}>
                        <Link href="/">
                            <a className={styles["product__detailpage_container-detail-link"]}>
                               
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

