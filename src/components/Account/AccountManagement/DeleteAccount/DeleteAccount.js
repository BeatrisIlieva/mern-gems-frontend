import styles from "./DeleteAccount.module.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Popup } from "../../../Popup/Popup";
import { LargeTitle } from "../../../LargeTitle/LargeTitle";
import { SmallTitle } from "../../../SmallTitle/SmallTitle";
import { Button } from "../../../Button/Button";

const LargeTitleContent = "Delete Account";
const SmallTitleContent = "Are you sure you want to delete your Account?";
const GoBackButtonTitle = "Go Back";
const DeleteAccountButtonTitle = "Delete Account";

export const DeleteAccount = () => {
  return (
    <Popup isVisible variant={"delete-account"}>
      <LargeTitle title={LargeTitleContent} />
      <SmallTitle title={SmallTitleContent} />
      <div className={styles["button-wrapper"]}>
        <Button variant={"pink-button"} title={GoBackButtonTitle} />
        <Button variant={"red-button"} title={DeleteAccountButtonTitle} />
      </div>
    </Popup>
  );

  // return (

  //   <section className={styles["popup-box"]} data-testid="delete-account-popup">
  //     <div className={styles["modal-dialog"]}>
  //       <div className={styles["modal-content"]}>
  //         <div className={styles["modal-header"]}>
  //           <div id={styles["xMark"]} onClick={() => popupCloseHandler()}>
  //             <FontAwesomeIcon
  //               icon={faXmark}
  //               className={styles["x-mark"]}
  //               data-testid="delete-account-popup-x-mark"
  //             />
  //           </div>
  //           <h2 className={styles["title"]}>Delete Account</h2>
  //           <p className={styles["paragraph"]}>
  //             Are you sure you want to delete your Account?
  //           </p>
  //         </div>
  //         <div className={styles["button-container"]}>
  //           <button
  //             className={styles["button-cancel"]}
  //             onClick={() => popupCloseHandler()}
  //             data-testid="delete-account-popup-cancel"
  //           >
  //             Cancel
  //           </button>
  //           <div className={styles["form-vertical-line"]}></div>
  //           <button
  //             className={styles["button-delete"]}
  //             onClick={() => popupSubmitHandler()}
  //             data-testid="delete-account-popup-confirm"
  //           >
  //             Delete
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};
