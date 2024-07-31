import styles from "./Popup.module.css";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "../Icon/Icon";

export const Popup = ({
  children,
  overlayVariant,
  modalVariant,
  popupCloseHandler,
}) => {
  return (
    <section className={styles[overlayVariant]}>
      <div className={styles[modalVariant]}>
        <div className={styles["icon"]}>
          {modalVariant !== "authentication" && (
            <Icon
              icon={faXmark}
              variant={"icon"}
              callBackFunction={popupCloseHandler}
            />
          )}
        </div>
        <div className={styles["content"]}>{children}</div>
      </div>
    </section>
  );
};
