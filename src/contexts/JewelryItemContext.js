import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

export const JewelryItemContext = createContext();

export const JewelryItemProvider = ({ children }) => {
  const [sizes, setSizes] = useState([]);

  const [sizeIsSelected, setSizeIsSelected] = useState(false);

  const [isSoldOut, setIsSoldOut] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [jewelry, setJewelry] = useState([]);

  const updateJewelry = (jewelry) => {
    setJewelry(jewelry);
  };

  const updateSizes = (sizes) => {
    setSizes(sizes);
  };

  const updateSizeIsSelected = (isSelected) => {
    setSizeIsSelected(isSelected);
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
    console.log(sizeId)
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
