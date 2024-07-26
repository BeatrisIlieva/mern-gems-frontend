import { Image } from "./Image/Image";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

import { SmallTitle } from "../SmallTitle/SmallTitle";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { Form } from "./Form/Form";

import { useJewelryItem } from "../../hooks/useJewelryItem";

import { EARRING_ID } from "../../constants/earringId";

import styles from "./JewelryItem.module.css";

export const JewelryItem = () => {
  const { jewelry, loading } = useJewelryItem();

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section className={styles["jewelry-wrapper"]}>
          <div className={styles["left-container"]}>
            <Image />
          </div>
          <div className={styles["right-container"]}>
            <LargeTitle title={jewelry.title} variant={"large-title"} />
            <p className={styles["description"]}>
              {jewelry.description}.{" "}
              {jewelry.sizes &&
                jewelry.category === EARRING_ID &&
                jewelry.sizes[0].measurement}
            </p>
            {jewelry.category !== EARRING_ID && <SmallTitle title={"Size:"} />}
            <Form />
          </div>
        </section>
      )}
    </>
  );
};
