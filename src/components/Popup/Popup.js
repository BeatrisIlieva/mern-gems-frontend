import styles from "./Popup.module.css";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "../Icon/Icon";

export const Popup = ({
  children,
  overlayVariant,
  modalVariant,
  popupCloseHandler,
}) => {
  document.body.style.overflow = "hidden";

  const closeClickHandler = () => {
    document.body.style.overflow = "visible";

    popupCloseHandler();
  };

  return (
    <section className={styles[overlayVariant]}>
      <div className={styles[modalVariant]}>
        <div className={styles["icon"]}>
          {modalVariant !== "authentication" && (
            <Icon
              icon={faXmark}
              variant={"popup"}
              callBackFunction={closeClickHandler}
            />
          )}
        </div>
        <div className={styles["content"]}>{children}</div>
      </div>
    </section>
  );
};
