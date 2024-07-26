import { useState } from "react";

import { useService } from "../../../hooks/useService";
import { bagServiceFactory } from "../../../services/bagService";

import { PinkButton } from "../../PinkButton/PinkButton";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { useJewelryItem } from "../../../hooks/useJewelryItem";
import styles from "./Form.module.css";

import { SIZE_FORM_KEY } from "../../../constants/sizeFormKey";
import { SIZE_ERROR_MESSAGE } from "../../../constants/sizeErrorMessage";
import { BAG_ACTIONS } from "../../../mappers/bagActions";

import { EARRING_ID } from "../../../constants/earringId";
import { useBagContext } from "../../../contexts/BagContext";

export const Form = () => {
  const { sizes, isSoldOut, jewelry, decreaseSizeQuantity} = useJewelryItem();

  const { updateBagQuantity } = useBagContext();

  const bagService = useService(bagServiceFactory);

  const [sizeIsSelected, setSizeIsSelected] = useState(
    jewelry.category === EARRING_ID
  );

  const [selectedSize, setSelectedSize] = useState({ [SIZE_FORM_KEY.Size]: 0 });

  const [errorMessage, setErrorMessage] = useState("");

  const addToBagHandler = async (data, jewelryId) => {
    await bagService.create(data, jewelryId);

    const sizeId = Number(data["size"]);

    decreaseSizeQuantity(sizeId);

    updateBagQuantity(BAG_ACTIONS.Add);

  };

  const changeHandler = (e) => {
    setSelectedSize((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!sizeIsSelected) {
      setErrorMessage(SIZE_ERROR_MESSAGE);
      return;
    }

    try {
      if (jewelry.category === EARRING_ID) {
        const sizeId = jewelry.sizes[0]._id;

        await addToBagHandler({ size: sizeId }, jewelry._id);
      } else {
        await addToBagHandler(selectedSize, jewelry._id);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

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
