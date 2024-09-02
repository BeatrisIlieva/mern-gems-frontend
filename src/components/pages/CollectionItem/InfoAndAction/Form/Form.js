import { useState, useEffect } from "react";

import { Sizes } from "./Sizes/Sizes";
import { Button } from "../../../../reusable/Button/Button";
import { Heart } from "../../../../common/Heart/Heart";

import { useBagContext } from "../../../../../contexts/BagContext";
import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";

import { SIZE_ERROR_MESSAGE } from "../../../../../constants/sizeErrorMessage";
import { SIZE_FORM_KEY } from "../../../../../constants/sizeFormKey";

import styles from "./Form.module.css";

export const Form = ({ jewelriesByCategory, toggleDisplayPopup }) => {
  const { userId } = useAuthenticationContext();

  const [errorMessage, setErrorMessage] = useState("");

  const inventories = jewelriesByCategory[0].inventories;

  const [selectedSize, setSelectedSize] = useState(null);

  const { add } = useBagContext();

  useEffect(() => {
    setSelectedSize(null);
    setErrorMessage(null);
  }, [jewelriesByCategory[0].color]);

  const changeHandler = (e) => {
    setSelectedSize(e.target.value);

    setErrorMessage("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSize) {
      setErrorMessage(SIZE_ERROR_MESSAGE);
      return;
    }

    try {
      const size = { [SIZE_FORM_KEY.Size]: selectedSize };
      const jewelryId = jewelriesByCategory[0]._id;

      await add(size, jewelryId, userId);

      toggleDisplayPopup();

      setSelectedSize(null);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form method="POST" onSubmit={onSubmit} className={styles["form"]}>
      <Sizes
        inventories={inventories}
        errorMessage={errorMessage}
        changeHandler={changeHandler}
        selectedSize={selectedSize}
      />
      <div className={styles["button-container"]}>
        <div
          className={`${styles["button-container"]} ${styles["add-to-bag"]}`}
        >
          <Button variant={"gray"} title={"Add To Bag"} />
        </div>
        <div
          className={`${styles["button-container"]} ${styles["add-to-wishlist"]}`}
        >
          <Heart />
        </div>
      </div>
    </form>
  );
};
