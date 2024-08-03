import { LargeTitle } from "../LargeTitle/LargeTitle";
import { NormalTitle } from "../NormalTitle/NormalTitle";

import styles from "./EmptyBagHeader.module.css";

export const EmptyBagHeader = () => {
  return (
    <div className={styles["title"]}>
      <LargeTitle title={"Your Shopping Bag is Empty."} />
      <NormalTitle
        title={"Explore and add something you love."}
        variant={"regular"}
      />
    </div>
  );
};
