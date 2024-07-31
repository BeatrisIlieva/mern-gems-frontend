import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useService } from "./useService";

import { jewelryServiceFactory } from "../services/jewelryService";

import { EARRING_ID } from "../constants/earringId";

export const useJewelryItem = () => {
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

  const updateSizeIsSelected = () => {
    setSizeIsSelected(true);
  };

  useEffect(() => {
    const allZero = sizes.every((size) => size.quantity === 0);

    setIsSoldOut(allZero);
  }, [sizes]);

  return {
    sizes,
    isSoldOut,
    loading,
    jewelry,
    decreaseSizeQuantity,
    sizeIsSelected,
    updateSizeIsSelected,
  };
};
