// import { useState, useEffect } from "react";

// import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
// import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";
// import { UnderlinedButton } from "../UnderlinedButton/UnderlinedButton";
// import { LargeTitle } from "../LargeTitle/LargeTitle";
// import { Logout } from "./Logout/Logout";
// import { NormalTitle } from "../NormalTitle/NormalTitle";

// import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

// import { useService } from "../../hooks/useService";

// import { userLoginDetailsServiceFactory } from "../../services/userLoginDetailsService";

// import { Icon } from "../Icon/Icon";
// import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

// import styles from "./Account.module.css";

// import { OrderHistoryPopup } from "./OrderHistoryPopup/OrderHistoryPopup";
// import { ShippingDetailsPopup } from "../ShippingDetailsPopup/ShippingDetailsPopup";
// import { CardDetailsPopup } from "./CardDetailsPopup/CardDetailsPopup";

// import { Section } from "./SectionContainer/SectionContainer";

// export const Account = () => {
//   const [showUpdateEmail, setShowUpdateEmail] = useState(false);
//   const [showUpdatePassword, setShowUpdatePassword] = useState(false);
//   const [displayOrderHistoryPopup, setDisplayOrderHistoryPopup] =
//     useState(false);
//   const [displayShippingDetailsPopup, setDisplayShippingDetailsPopup] =
//     useState(false);

//   const [displayCardDetailsPopup, setDisplayCardDetailsPopup] = useState(false);

//   const [userLoginDetails, setUserLoginDetails] = useState([]);

//   const { userId } = useAuthenticationContext();

//   const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

//   const toggleDisplayOrderHistoryPopup = () => {
//     setDisplayOrderHistoryPopup(
//       (displayOrderHistoryPopup) => !displayOrderHistoryPopup
//     );
//   };

//   const toggleDisplayShippingDetailsPopup = () => {
//     setDisplayShippingDetailsPopup(
//       (displayShippingDetailsPopup) => !displayShippingDetailsPopup
//     );
//   };

//   const toggleDisplayCardDetailsPopup = () => {
//     setDisplayCardDetailsPopup(
//       (displayCardDetailsPopup) => !displayCardDetailsPopup
//     );
//   };

//   useEffect(() => {
//     userLoginDetailsService
//       .getOne(userId)
//       .then((data) => {
//         setUserLoginDetails(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, [userLoginDetailsService, userId]);

//   const onUpdateEmailClick = async () => {
//     setShowUpdateEmail(true);
//     setShowUpdatePassword(false);
//   };

//   const onUpdatePasswordClick = async () => {
//     setShowUpdatePassword(true);
//     setShowUpdateEmail(false);
//   };

//   return (
//     <section className={styles["account"]}>
//       <div className={styles["left-container"]}>
//         <div className={styles["left-sub-container"]}>
//           <div className={styles["title"]}>
//             <LargeTitle title={"Address Book"} variant={"large-title"} />
//           </div>
//           <button
//             onClick={toggleDisplayShippingDetailsPopup}
//             className={styles["button-container"]}
//           >
//             {/* <Icon icon={faPlus} variant={"address-book"} /> */}
//             Add a New Address
//           </button>
//         </div>
//         <div className={styles["left-sub-container"]}>
//           <div className={styles["title"]}>
//             <LargeTitle title={"Saved Credit Card"} variant={"large-title"} />
//           </div>
//           <button
//             onClick={toggleDisplayCardDetailsPopup}
//             className={styles["button-container"]}
//           >
//             {/* <Icon icon={faPlus} variant={"address-book"} /> */}
//             Add a New Credit Card
//           </button>
//         </div>
//         <div className={styles["left-sub-container"]}>
//           <div className={styles["title"]}>
//             <LargeTitle title={"Order History"} variant={"large-title"} />
//           </div>
//           <button
//             onClick={toggleDisplayOrderHistoryPopup}
//             className={styles["button-container"]}
//           >
//             <Icon icon={faClockRotateLeft} variant={"address-book"} />
//             View Order History
//           </button>
//         </div>
//       </div>
//       <div className={styles["right-container"]}>
//         <div className={styles["right-sub-container"]}>
//           <LargeTitle title={"Account Management"} variant={"large-title"} />
//           <NormalTitle title={userLoginDetails.email} variant={"bolded"} />
//           <div className={styles["buttons-container"]}>
//             <UnderlinedButton
//               title={"Update Email Address"}
//               callBackFunction={onUpdateEmailClick}
//             />
//             <UnderlinedButton
//               title={"Change Password"}
//               callBackFunction={onUpdatePasswordClick}
//             />
//             <Logout />
//           </div>
//           {showUpdateEmail && <UpdateEmailForm />}
//           {showUpdatePassword && <UpdatePasswordForm />}
//         </div>
//       </div>
//       <OrderHistoryPopup
//         popupCloseHandler={toggleDisplayOrderHistoryPopup}
//         displayOrderHistoryPopup={displayOrderHistoryPopup}
//       />
//       <ShippingDetailsPopup
//         displayShippingDetailsPopup={displayShippingDetailsPopup}
//         popupCloseHandler={toggleDisplayShippingDetailsPopup}
//       />
//       <CardDetailsPopup
//         displayCardDetailsPopup={displayCardDetailsPopup}
//         popupCloseHandler={toggleDisplayCardDetailsPopup}
//       />
//     </section>
//   );
// };

import { OrderHistory } from "./OrderHistory/OrderHistory";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";
import { CardDetails } from "./CardDetails/CardDetails";
import { AccountManagement } from "./AccountManagement/AccountManagement";

import styles from "./Account.module.css";

export const Account = () => {
  return (
    <section className={styles["account"]}>
      <div className={styles["flex-container"]}>
        <OrderHistory />
        <ShippingDetails />
        <CardDetails />
      </div>
      <div className={styles["right-container"]}>
        <AccountManagement />
      </div>
    </section>
  );
};
