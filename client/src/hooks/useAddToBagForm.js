import { useState, useEffect, useCallback } from "react";

import { useLanguageContext } from "../contexts/LanguageContext";
import { useAuthenticationContext } from "../contexts/AuthenticationContext";
import { useBagContext } from "../contexts/BagContext";

import { SIZE_FORM_KEY } from "../constants/sizeFormKey";
import { SIZE_ERROR_MESSAGE } from "../constants/sizeErrorMessage";

export const useAddToBagForm = ({
  jewelriesByCategory,
  toggleDisplayPopup,
}) => {
  const { language } = useLanguageContext();

  const { userId } = useAuthenticationContext();

  const [errorMessage, setErrorMessage] = useState("");

  const [selectedSize, setSelectedSize] = useState(null);

  const { add } = useBagContext();

  useEffect(() => {
    setSelectedSize(null);
    setErrorMessage(null);
  }, [jewelriesByCategory[0].color, language]);

  const changeHandler = useCallback((e) => {
    setSelectedSize(e.target.value);

    setErrorMessage("");
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSize) {
      setErrorMessage(SIZE_ERROR_MESSAGE[language]);
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

  return { errorMessage, changeHandler, onSubmit, selectedSize };
};
