import { LargeImages } from "../../common/LargeImages/LargeImages";
import { MiniImages } from "../../common/MiniImages/MiniImages";
import { StockStatus } from "../../common/StockStatus/StockStatus";
import { Sizes } from "./Sizes/Sizes";

import { useJewelryContext } from "../../../contexts/JewelryContext";

import styles from "./Jewelry.module.css";

export const Jewelry = () => {
  const { selectedEntity, selectedColor, updateSelectedColor } =
    useJewelryContext();

    

  return (
    <section id={styles["jewelry"]}>
      <div className={styles["thumbnail"]}>
        <StockStatus selectedEntityColor={selectedEntity[selectedColor]} />
        <LargeImages entity={selectedEntity} colorIndex={selectedColor} />
      </div>
      <div className={styles["info-and-action"]}>
        <h1 className={styles["title"]}>{selectedEntity[selectedColor].title}</h1>
        <p className={styles["description"]}>
        {selectedEntity[selectedColor].description}
        </p>
        <div className={styles["mini-images"]}>
          <MiniImages
            colorIndex={selectedColor}
            entity={selectedEntity}
            updateColorIndex={updateSelectedColor}
          />
        </div>
        <Sizes />
      </div>
    </section>
  );
};
