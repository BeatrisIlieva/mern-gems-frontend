import { Link } from "react-router-dom";

import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { NormalTitle } from "../../reusable/NormalTitle/NormalTitle";

import styles from "./OrderConfirmation.module.css";

export const OrderConfirmation = () => {
  return (
    <section className={styles["order-confirmation"]}>
      <div className={styles["info"]}>
        <LargeTitle title={"Thank you for your purchase!"} variant={"italic"} />
        <NormalTitle
          title={"Your order has been successfully placed."}
          variant={"bolded"}
        />
        <div className={styles["link-to-account"]}>
          <NormalTitle
            title={"You can track your order status in your"}
            variant={"bolded"}
          />
          <Link to={"/users/account"} className={styles["link"]}>
            Account
          </Link>
        </div>
      </div>
      <div className={styles["image"]}>
        <img
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1718984589/template_images/sbs_lp_forgetmenot_whetr3.jpg"
          alt="image"
          className={styles["img"]}
        />
      </div>
    </section>
  );
};
