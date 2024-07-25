import { Image } from "./Image/Image";

import { SmallTitle } from "../SmallTitle/SmallTitle";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { Form } from "./Form/Form";

import { useJewelryItem } from "../../hooks/useJewelryItem";

import styles from "./JewelryItem.module.css";

const EarringId = 2;

export const JewelryItem = () => {
  const {
    isSoldOut,
    jewelry,
    leftIsSelected,
    rightIsSelected,
    toggleSelected,
  } = useJewelryItem();

  return (
    <section className={styles["jewelry-wrapper"]}>
      <div className={styles["left-container"]}>
        <Image
          isSoldOut={isSoldOut}
          imageUrl={
            leftIsSelected ? jewelry.firstImageUrl : jewelry.secondImageUrl
          }
          title={jewelry.title}
          toggleSelected={toggleSelected}
          variant={leftIsSelected ? "left-image" : "right-image"}
          leftIsSelected={leftIsSelected}
          rightIsSelected={rightIsSelected}
        />
      </div>
      <div className={styles["right-container"]}>
        <LargeTitle title={jewelry.title} variant={"large-title"} />
        <p className={styles["description"]}>
          {jewelry.description}.{" "}
          {jewelry.sizes &&
            jewelry.category === EarringId &&
            jewelry.sizes[0].measurement}
        </p>
        {jewelry.category !== EarringId && <SmallTitle title={"Size:"} />}
        <Form />
      </div>
    </section>
  );
};
