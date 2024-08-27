import { Button } from "../../../reusable/Button/Button";
import { UserShippingDetails } from "./UserShippingDetails/UserShippingDetails";
import { UserLoginDetails } from "./UserLoginDetails/UserLoginDetails";
import { DualTitleSection } from "../../../reusable/DualTitleSection/DualTitleSection";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";

import styles from "./ShippingInformation.module.css";

export const ShippingInformation = ({ toggleDisplayShippingDetailsPopup }) => {
  return (
    <section className={styles["shipping-information"]}>
      {/* <div className={styles["header-wrapper"]}> */}
        <DualTitleSection
          firstTitle={
            <LargeTitle
              title={"Shipping Information"}
              textAlign={"align-left"}
            />
          }
          secondTitle={
            <Button
              title={"Edit"}
              callBackFunction={toggleDisplayShippingDetailsPopup}
              variant={"underlined"}
            />
          }
        />
        {/* <h2 className={styles["title"]}>Shipping Information</h2> */}
      {/* </div> */}
      <UserLoginDetails />
      <UserShippingDetails />
    </section>
  );
};
