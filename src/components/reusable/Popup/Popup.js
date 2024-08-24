// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";

// import styles from "./Popup.module.css";

// export const Popup = ({
//   popupCloseHandler,
//   children,
//   modalVariant,
//   overlayVariant,
// }) => {
//   const showXMark = modalVariant !== "authentication";

//   document.body.style.overflow = "hidden";

//   const header = document.querySelector(".header");

//   header.style.zIndex = "0";



//   const closeHandler = () => {
//     document.body.style.overflow = "visible";

//     header.style.zIndex = "100";


//     popupCloseHandler();
//   };

//   return (
//     <section
//       className={`${styles["overlay"]} ${styles["slide-in"]} ${styles[overlayVariant]}`}
//     >
//       <div className={`${styles["modal"]} ${styles[modalVariant]}`}>
//         {showXMark && (
//           <FontAwesomeIcon
//             icon={faXmark}
//             className={styles["x-mark"]}
//             onClick={closeHandler}
//           />
//         )}
//         {children}
//       </div>
//     </section>
//   );
// };


import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Popup.module.css";

export const Popup = ({
  popupCloseHandler,
  children,
  modalVariant,
  overlayVariant,
}) => {
  const [isOpen, setIsOpen] = useState(true); // State to manage popup open/close

  useEffect(() => {
    // When the popup is open, adjust the z-index of the header
    const headerElement = document.getElementById('header');

    if (isOpen) {
      document.body.style.overflow = "hidden";
      headerElement.style.zIndex = "0"; // Lower z-index of header
    } else {
      document.body.style.overflow = "visible";
      headerElement.style.zIndex = "100"; // Restore z-index of header
    }

    // Cleanup function to restore z-index when the popup is closed
    return () => {
      headerElement.style.zIndex = "100";
      document.body.style.overflow = "visible";
    };
  }, [isOpen]); // Dependency on `isOpen` to trigger effect when the popup opens or closes

  const closeHandler = () => {
    setIsOpen(false); // Update state to close the popup
    popupCloseHandler(); // Call the parent handler
  };

  return (
    <section
      className={`${styles["overlay"]} ${styles["slide-in"]} ${styles[overlayVariant]}`}
      onAnimationEnd={() => !isOpen && setIsOpen(false)} // Optionally handle animation end if necessary
    >
      <div className={`${styles["modal"]} ${styles[modalVariant]}`}>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles["x-mark"]}
          onClick={closeHandler}
        />
        {children}
      </div>
    </section>
  );
};
