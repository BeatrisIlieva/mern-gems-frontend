import { Image } from "../../../../../../reusable/MiniImages/Image/Image";

import styles from "./Images.module.css";

export const Images = () => {
  return (
    <div className={styles["images"]}>
      <Image
        image={jewelriesByCategory[0].firstImageUrl}
        title={jewelriesByCategory[0].jewelryTitle}
      />
      <Image
        image={jewelriesByCategory[0].secondImageUrl}
        title={jewelriesByCategory[0].jewelryTitle}
      />
    </div>
  );
};
