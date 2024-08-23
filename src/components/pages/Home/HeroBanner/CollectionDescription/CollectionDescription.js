import { MiniImage } from "../MiniImage/MiniImage";
import { Paragraph } from "../../../../reusable/Paragraph/Paragraph";
import { XLargeTitle } from "../../../../reusable/XLargeTitle/XLargeTitle";

import { IMAGE_BY_URL_AND_VARIANT } from "../constants/imagesByUrlAndVariant";
import { Button } from "../../../../reusable/Button/Button";

import styles from "./CollectionDescription.module.css";

export const CollectionDescription = () => {
  return (
    <div className={styles["description-wrapper"]}>
      <div className={styles["collection-description"]}>
        {/* <MiniImage
          imageUrl={IMAGE_BY_URL_AND_VARIANT.pink.imageUrl}
          variant={IMAGE_BY_URL_AND_VARIANT.pink.variant}
          waveEffect={IMAGE_BY_URL_AND_VARIANT.pink.waveEffect}
        />
        <MiniImage
          imageUrl={IMAGE_BY_URL_AND_VARIANT.blue.imageUrl}
          variant={IMAGE_BY_URL_AND_VARIANT.blue.variant}
          waveEffect={IMAGE_BY_URL_AND_VARIANT.blue.waveEffect}
        /> */}
        <div className={styles["wrapper"]}>
          <div className={styles["inner-wrapper"]}>
            <MiniImage
              imageUrl={IMAGE_BY_URL_AND_VARIANT.butterfly.imageUrl}
              variant={IMAGE_BY_URL_AND_VARIANT.butterfly.variant}
              waveEffect={IMAGE_BY_URL_AND_VARIANT.butterfly.waveEffect}
            />
            <XLargeTitle title={"Forget-Me-Not Collection"} />

          <MiniImage
            imageUrl={IMAGE_BY_URL_AND_VARIANT.white.imageUrl}
            variant={IMAGE_BY_URL_AND_VARIANT.white.variant}
            waveEffect={IMAGE_BY_URL_AND_VARIANT.white.waveEffect}
          />
          <Paragraph
            text={
              "The enchanting and delicate beauty of a Forget-Me-Not flower in bloom is captured in a series of fine jewelry designs that celebrate the endless beauty of nature’s greatest gifts – rare gemstones and flowers in bloom."
            }
            textAlign={"center"}
          />
          <Button variant={"animated"} title={"Discover"} />
          </div>
        </div>
      </div>
    </div>
  );
};
