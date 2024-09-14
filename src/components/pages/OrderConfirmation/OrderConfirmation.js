import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";
import { TrackOrder } from "./TrackOrder/TrackOrder";
import { ConfirmationEmail } from "./ConfirmationEmail/ConfirmationEmail";

import { useLanguageContext } from "../../../contexts/LanguageContext";

import { TITLE_BY_LANGUAGE } from "./constants/languageRelated";

import styles from "./OrderConfirmation.module.css";

export const OrderConfirmation = () => {
  const { language } = useLanguageContext();

  const title = TITLE_BY_LANGUAGE[language];

  return (
    <section id={styles["order-confirmation"]} data-testid="order-confirmation">
      <div className={styles["relative-container"]}>
        <div className={styles["thumbnail"]} data-testid="butterfly-container">
          <img
            className={styles["butterfly"]}
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1723986117/forget-me-not-collection/miniImages/1042750_d9d98_vfqzme.gif"
            alt="butterfly"
          />
        </div>
        <InfoMessage title={title} subtitle={<TrackOrder />} />
      </div>
      <ConfirmationEmail />
    </section>
  );
};
