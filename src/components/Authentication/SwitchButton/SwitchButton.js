import { UnderlinedButton } from "../../UnderlinedButton/UnderlinedButton";

import styles from "./SwitchButton.module.css";

export const SwitchButton = ({ text, title, switchPopupHandler, option }) => {
  return (
    <div className={styles["wrapper"]}>
      <span>{text}</span>
      <UnderlinedButton
        title={title}
        callBackFunction={() => switchPopupHandler(option)}
      />
    </div>
  );
};
