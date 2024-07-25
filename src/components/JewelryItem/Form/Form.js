import { PinkButton } from "../../PinkButton/PinkButton";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { useJewelryItem } from "../../../hooks/useJewelryItem";
import styles from "./Form.module.css";

import { SIZE_FORM_KEY } from "../../../constants/sizeFormKey";

import { EARRING_ID } from "../../../constants/earringId";

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
      {jewelry.category !== EARRING_ID && jewelry.sizes && (
        <div className={styles["size-wrapper"]}>
          <div className={styles["radio-container"]}>
            {sizes.map((item) => (
              <div key={item._id}>
                <input
                  type="radio"
                  name={SIZE_FORM_KEY.Size}
                  id={item._id}
                  value={item._id}
                  onChange={changeHandler}
                  checked={
                    Number(selectedSize[SIZE_FORM_KEY.Size]) === item._id
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
  );
};
