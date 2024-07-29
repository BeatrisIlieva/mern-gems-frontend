import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Icon.module.css"

export const Icon = ({ icon, variant, callBackFunction}) => {
  return <FontAwesomeIcon icon={icon} className={styles[variant]} onClick={callBackFunction}/>;
};
