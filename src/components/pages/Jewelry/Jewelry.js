import { LargeImages } from "../../common/LargeImages/LargeImages";
import { MiniImages } from "../../common/MiniImages/MiniImages";
import { StockStatus } from "../../common/StockStatus/StockStatus";
import { Sizes } from "./Sizes/Sizes";
import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";
import { Button } from "../../reusable/Button/Button";

import { useJewelryContext } from "../../../contexts/JewelryContext";

import styles from "./Jewelry.module.css";

export const Jewelry = () => {
  const { selectedEntity, selectedColor, updateSelectedColor } =
    useJewelryContext();

  return (
    <section id={styles["jewelry"]}>
      {/* <div className={styles["image-container"]}>
        <img className={styles["image"]} src={selectedEntity[selectedColor].firstImageUrl} alt="" />
      </div> */}
      <div className={styles["image-container"]}>
        <div className={styles["image"]}>
          <LargeImages entity={selectedEntity} colorIndex={selectedColor} />
        </div>
      </div>
      <div className={styles["info-and-action-container"]}>
        <DualTitleSection
          firstTitle={
            <div className={styles["mini-images"]}>
              <MiniImages
                colorIndex={selectedColor}
                entity={selectedEntity}
                updateColorIndex={updateSelectedColor}
              />
            </div>
          }
          secondTitle={
            <StockStatus selectedEntityColor={selectedEntity[selectedColor]} />
          }
          variant={"regular"}
        />
        <h1 className={styles["title"]}>
          {selectedEntity[selectedColor].title}
        </h1>
        <p className={styles["description"]}>
          {selectedEntity[selectedColor].description}
        </p>
        <Sizes />
      </div>
    </section>
  );
};
