import { MiniImage } from "../MiniImage/MiniImage";

import { IMAGE_BY_URL_AND_VARIANT } from "../constants/imagesByUrlAndVariant";

import styles from "./CollectionDescription.module.css";

export const CollectionDescription = () => {
  return (
    <article className={styles["collection-description"]}>
      <MiniImage
        imageUrl={IMAGE_BY_URL_AND_VARIANT.white.imageUrl}
        variant={IMAGE_BY_URL_AND_VARIANT.white.variant}
        waveEffect={IMAGE_BY_URL_AND_VARIANT.white.waveEffect}
      />
      <MiniImage
        imageUrl={IMAGE_BY_URL_AND_VARIANT.blue.imageUrl}
        variant={IMAGE_BY_URL_AND_VARIANT.blue.variant}
        waveEffect={IMAGE_BY_URL_AND_VARIANT.blue.waveEffect}
      />
      <div className={styles["wrapper"]}>
        <h1 className={styles["title"]}>
          <MiniImage
            imageUrl={IMAGE_BY_URL_AND_VARIANT.butterfly.imageUrl}
            variant={IMAGE_BY_URL_AND_VARIANT.butterfly.variant}
            waveEffect={IMAGE_BY_URL_AND_VARIANT.butterfly.waveEffect}
          />
          Forget-Me-Not Collection
        </h1>
        <MiniImage
          imageUrl={IMAGE_BY_URL_AND_VARIANT.pink.imageUrl}
          variant={IMAGE_BY_URL_AND_VARIANT.pink.variant}
          waveEffect={IMAGE_BY_URL_AND_VARIANT.pink.waveEffect}
        />
        <p className={styles["paragraph"]}>
          The enchanting and delicate beauty of a Forget-Me-Not flower in bloom
          is captured in a series of fine jewelry designs that celebrate the
          endless beauty of nature’s greatest gifts – rare gemstones and flowers
          in bloom.
        </p>
      </div>
    </article>
  );
};
