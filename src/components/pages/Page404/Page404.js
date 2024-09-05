import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../common/CardSlider/CardSlider";

import styles from "./Page404.module.css";

export const Page404 = () => {
  return (
    <section id={styles["page-404"]}>
      <InfoMessage
        title={"Sorry, we can’t locate that page."}
        subtitle={"You can continue shopping by exploring the links below."}
      />
      <CardSlider />
    </section>
  );
};
