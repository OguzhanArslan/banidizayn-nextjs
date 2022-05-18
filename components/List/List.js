import React from "react"
import styles from "./List.module.scss"

function List(props) {
    return (
        <ul className={styles.list}>
            {props.data.map(function(item, index) {
                return (
                    <li key={index}>{item}</li>
                )
            })}
        </ul>
    )
}

export default List