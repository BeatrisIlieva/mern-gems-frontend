import { XLargeTitle } from "../../XLargeTitle/XLargeTitle";
import styles from "./PopupTitle.module.css";

export const PopupTitle = ({title}) => {
  return (
    <div className={styles["title"]}>
      <XLargeTitle title={title} variant={"large-title"} />
    </div>
  );
};
