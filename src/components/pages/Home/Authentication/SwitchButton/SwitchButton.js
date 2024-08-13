import { Button } from "../../../../reusable/Button/Button";

import styles from "./SwitchButton.module.css";

export const SwitchButton = ({ text, title, switchPopupHandler, option }) => {
  return (
    <div className={styles["wrapper"]}>
      <span>{text}</span>
      <Button
        title={title}
        callBackFunction={() => switchPopupHandler(option)}
        variant={"underlined"}
      />
    </div>
  );
};
