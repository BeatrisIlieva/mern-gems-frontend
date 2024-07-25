import { JewelryImage } from "./JewelryImage/JewelryImage";
import { PinkButton } from "../PinkButton/PinkButton";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { LargeTitle } from "../LargeTitle/LargeTitle";

import { useJewelryItem } from "../../hooks/useJewelryItem";

import styles from "./JewelryItem.module.css";

const SizeFormKeys = {
  Size: "size",
};

const EarringId = 2;

export const JewelryItem = () => {
  const {
    sizes,
    isSoldOut,
    jewelry,
    leftIsSelected,
    rightIsSelected,
    errorMessage,
    toggleSelected,
    changeHandler,
    onSubmit,
    selectedSize,
    setSizeIsSelected,
    setErrorMessage,
  } = useJewelryItem();

  return (
    <section className={styles["jewelry-wrapper"]}>
      <div className={styles["left-container"]}>
        <JewelryImage
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
        <form method="POST" onSubmit={onSubmit}>
          {jewelry.category !== EarringId && jewelry.sizes && (
            <div className={styles["size-wrapper"]}>
              <div className={styles["radio-container"]}>
                {sizes.map((item) => (
                  <div key={item._id}>
                    <input
                      type="radio"
                      name={SizeFormKeys.Size}
                      id={item._id}
                      value={item._id}
                      onChange={changeHandler}
                      checked={
                        Number(selectedSize[SizeFormKeys.Size]) === item._id
                      }
                      onClick={() => {
                        setSizeIsSelected(true);
                        setErrorMessage("");
                      }}
                      disabled={!Number(item.quantity) > 0}
                    />
                    <label className={styles["label"]} htmlFor={item._id}>
                      {item.measurement}
                    </label>
                  </div>
                ))}
              </div>
              <div className={styles["error-message"]}>{errorMessage}</div>
            </div>
          )}
          <SmallTitle title={`$ ${jewelry.price}`} />
          <PinkButton title={"Add To Bag"} buttonIsDisabled={isSoldOut} />
        </form>
      </div>
    </section>
  );
};
