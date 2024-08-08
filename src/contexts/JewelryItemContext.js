import { useState } from "react";
import { createContext, useContext } from "react";

import { SIZE_FORM_KEY } from "../constants/sizeFormKey";

export const JewelryItemContext = createContext();

export const JewelryItemProvider = ({ children }) => {
  const [sizes, setSizes] = useState([]);

  const [sizeIsSelected, setSizeIsSelected] = useState(false);

  const [selectedSize, setSelectedSize] = useState({ [SIZE_FORM_KEY.Size]: 0 });

  const [isSoldOut, setIsSoldOut] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [jewelry, setJewelry] = useState([]);

  const [categoryIsEarring, setCategoryIsEarring] = useState(false);

  const updateJewelry = (jewelry) => {
    setJewelry(jewelry);
  };

  const updateCategoryIsEarring = (categoryIsEarring) => {
    setCategoryIsEarring(categoryIsEarring);
  };

  const updateSizes = (sizes) => {
    setSizes(sizes);
  };

  const updateSizeIsSelected = (isSelected) => {
    setSizeIsSelected(isSelected);
  };

  const updateSelectedSize = (e) => {
    setSelectedSize((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const removeSelectedSize = () => {
    setSelectedSize({ [SIZE_FORM_KEY.Size]: 0 });
  };

  const updateIsSoldOut = (isSoldOut) => {
    setIsSoldOut(isSoldOut);
  };

  const toggleIsLoading = () => {
    setIsLoading((isLoading) => !isLoading);
  };

  const decreaseSizeQuantity = (sizeId) => {
    setSizes((prevSizes) =>
      prevSizes.map((size) =>
        size._id === sizeId ? { ...size, quantity: size.quantity - 1 } : size
      )
    );
  };

  const increaseSizeQuantity = (sizeId) => {
    setSizes((prevSizes) =>
      prevSizes.map((size) =>
        size._id === sizeId ? { ...size, quantity: size.quantity + 1 } : size
      )
    );
  };

  const context = {
    sizes,
    updateSizes,
    sizeIsSelected,
    updateSizeIsSelected,
    isSoldOut,
    updateIsSoldOut,
    isLoading,
    jewelry,
    updateJewelry,
    toggleIsLoading,
    decreaseSizeQuantity,
    increaseSizeQuantity,
    selectedSize,
    updateSelectedSize,
    removeSelectedSize,
    categoryIsEarring,
    updateCategoryIsEarring,
  };

  return (
    <JewelryItemContext.Provider value={context}>
      {children}
    </JewelryItemContext.Provider>
  );
};

export const useJewelryItemContext = () => {
  const context = useContext(JewelryItemContext);

  return context;
};
