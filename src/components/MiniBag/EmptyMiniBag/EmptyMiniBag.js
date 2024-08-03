import { LargeTitle } from "../../LargeTitle/LargeTitle";

import { NormalTitle } from "../../NormalTitle/NormalTitle";

import { Collection } from "../../Collection/Collection";

export const EmptyMiniBag = () => {
  return (
    <section>
      <div className={styles["top-container"]}>
        <LargeTitle title={"Your Shopping Bag is Empty."} />
        <NormalTitle
          title={"Explore and add something you love."}
          variant={"regular"}
        />
      </div>
      <Collection />
    </section>
  );
};
