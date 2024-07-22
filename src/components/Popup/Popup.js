import React from "react";
import styles from "./Popup.module.css";

export const Popup = ({ isVisible, children }) => {
  return (
    <section className={`${styles.overlay} ${isVisible ? styles.visible : ''}`.trim()}>
      <div className={styles["modal"]}>{children}</div>
    </section>
  );
};


// export const ParentComponent = () => {
//     const [isPopupVisible, setIsPopupVisible] = useState(false);
  
//     const togglePopup = () => {
//       setIsPopupVisible(!isPopupVisible);
//     };
  
//     return (
//       <div className={styles["app"]}>
//         <button onClick={togglePopup}>Toggle Popup</button>
//         <Popup isVisible={isPopupVisible}>
//           <h1>This is the Popup Content</h1>
//           <p>Here you can render any component or content dynamically.</p>
//           <button onClick={togglePopup}>Close</button>
//         </Popup>
//       </div>
//     );
//   };