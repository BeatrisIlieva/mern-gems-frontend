import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import styles from "./Icon.module.css"

export const Icon = () => {
    return (
        <FontAwesomeIcon icon={faEllipsis} className={styles["icon"]} />
    )
}