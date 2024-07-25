import { PinkButton } from "../../PinkButton/PinkButton";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { useJewelryItem } from "../../../hooks/useJewelryItem";
import styles from "./Form.module.css";

const SizeFormKeys = {
  Size: "size",
};

const EarringId = 2;

export const Form = () => {
  const {
    sizes,
    isSoldOut,
    jewelry,
    errorMessage,
    changeHandler,
    onSubmit,
    selectedSize,
    setSizeIsSelected,
    setErrorMessage,
  } = useJewelryItem();

  return (
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
                  checked={Number(selectedSize[SizeFormKeys.Size]) === item._id}
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
  );
};
