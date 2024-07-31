import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

import { useService } from "../hooks/useService";

import { useParams } from "react-router-dom";

import { jewelryServiceFactory } from "../services/jewelryService";

import { EARRING_ID } from "../constants/earringId";

export const JewelryItemContext = createContext();

export const JewelryItemProvider = ({ children }) => {
  const [sizes, setSizes] = useState([]);

  const [sizeIsSelected, setSizeIsSelected] = useState(false);

  const [isSoldOut, setIsSoldOut] = useState(false);

  const jewelryService = useService(jewelryServiceFactory);

  const [loading, setLoading] = useState(true);

  const { jewelryId } = useParams();

  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    setLoading(true);

    jewelryService
      .getOne(jewelryId)
      .then((data) => {
        setJewelry(data[0]);

        setSizes(data[0].sizes);

        setSizeIsSelected(data[0].category === EARRING_ID);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  const updateSizeIsSelected = () => {
    setSizeIsSelected(true);
  };

  useEffect(() => {
    const allZero = sizes.every((size) => size.quantity === 0);

    setIsSoldOut(allZero);
  }, [sizes]);

  const context = {
    sizes,
    isSoldOut,
    loading,
    jewelry,
    decreaseSizeQuantity,
    increaseSizeQuantity,
    sizeIsSelected,
    updateSizeIsSelected,
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
