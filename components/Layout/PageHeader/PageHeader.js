import styles from "./PageHeader.module.scss";

export default function PageHeader({ image, title }) {
    const PageImg = require('../../../assets/images/page/' + image + '.jpg');

    return(
        <div class={styles["page__header"]} style={{backgroundImage: `url(${PageImg.default.src})`}}>
            <div className="container">
                <div className={styles["page__header-content"]}>
                    <h1 className={styles["page__header-title"]}>{ title }</h1>
                </div>
            </div>
        </div>
    )
}