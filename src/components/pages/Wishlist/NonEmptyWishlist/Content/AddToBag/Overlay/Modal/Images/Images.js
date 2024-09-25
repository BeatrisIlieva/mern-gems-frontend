import { Image } from "./Image/Image";
import { Images as SingleImage } from "../../../../../../../../reusable/Images/Images";

import styles from "./Images.module.css";

export const Images = ({ jewelriesByCategory }) => {
  return (
    <>
      <div className={styles["images"]}>
        <Image
          image={jewelriesByCategory[0].firstImageUrl}
          title={jewelriesByCategory[0].categories[0].title}
        />
        <Image
          image={jewelriesByCategory[0].secondImageUrl}
          title={jewelriesByCategory[0].categories[0].title}
        />
      </div>
      <div className={styles["image"]}>
        <SingleImage
          jewelriesByCategory={jewelriesByCategory}
          backgroundColor={"with-background"}
        />
      </div>
    </>
  );
};
