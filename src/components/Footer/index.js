import React from "react";
import moment from "moment";
import styles from "./style.module.css"

const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <p>all rights not reserverd &#169;{moment().format("YYYY")}</p>
        </div>
    )

}

export default Footer;