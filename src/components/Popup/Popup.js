// import { useState } from "react";

// import React from "react";
// import styles from "./Popup.module.css";

// import { faXmark } from "@fortawesome/free-solid-svg-icons";

// import { Icon } from "../Icon/Icon";

// export const Popup = ({ isVisible, children, variant, popupCloseHandler }) => {
//   return (
//     <section
//       className={`${styles.overlay} ${isVisible ? styles.visible : ""}`.trim()}
//     >
//       <div className={styles[variant]}>
//         <div className={styles["icon"]}>
//           {variant !== "authentication" && (
//             <Icon icon={faXmark} variant={"icon"} callBackFunction={popupCloseHandler} />
//           )}
//         </div>
//         <div className={styles["content"]}>{children}</div>
//       </div>
//     </section>
//   );
// };

import { useState } from "react";

import React from "react";
import styles from "./Popup.module.css";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "../Icon/Icon";

export const Popup = ({
  isVisible,
  children,
  overlayVariant,
  modalVariant,
  popupCloseHandler,
}) => {
  return (
    <section
      // className={`${styles[overlayVariant]} ${isVisible ? styles[modalVariant] : ""}`.trim()}
      className={styles[overlayVariant]}
    >
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
