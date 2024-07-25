import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { BAG_ACTIONS } from "../mappers/bagActions";

import { useBagContext } from "../contexts/BagContext";

import { useService } from "./useService";

import { jewelryServiceFactory } from "../services/jewelryService";
import { bagServiceFactory } from "../services/bagService";

const SizeFormKeys = {
  Size: "size",
};

const EarringId = 2;

const ErrorMessage = "Ensure you have selected the desired size";

export const useJewelryItem = () => {
  const [sizes, setSizes] = useState([]);
  const [isSoldOut, setIsSoldOut] = useState(false);
  const { updateBagQuantity } = useBagContext();

  const jewelryService = useService(jewelryServiceFactory);
  const bagService = useService(bagServiceFactory);

  const [loading, setLoading] = useState(true);

  const { jewelryId } = useParams();
  const [jewelry, setJewelry] = useState([]);

  const [leftIsSelected, setLeftIsSelected] = useState(true);
  const [rightIsSelected, setRightIsSelected] = useState(false);

  const [sizeIsSelected, setSizeIsSelected] = useState(true);
  const [selectedSize, setSelectedSize] = useState({ [SizeFormKeys.Size]: 0 });

  const [errorMessage, setErrorMessage] = useState("");

  const toggleSelected = () => {
    setLeftIsSelected(!leftIsSelected);
    setRightIsSelected(!rightIsSelected);
  };

  useEffect(() => {
    setLoading(true);

    jewelryService
      .getOne(jewelryId)
      .then((data) => {
        setJewelry(data[0]);
        setSizeIsSelected(data[0].category === EarringId);

        setSizes(data[0].sizes);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const changeHandler = (e) => {
    setSelectedSize((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const decreaseSizeQuantity = (sizeId) => {
    setSizes((prevSizes) =>
      prevSizes.map((size) =>
        size._id === sizeId ? { ...size, quantity: size.quantity - 1 } : size
      )
    );
  };

  useEffect(() => {
    const allZero = sizes.every((size) => size.quantity === 0);
    setIsSoldOut(allZero);
  }, [sizes]);

  const addToBagHandler = async (data, jewelryId) => {
    await bagService.create(data, jewelryId);

    const sizeId = Number(data["size"]);

    decreaseSizeQuantity(sizeId);

    updateBagQuantity(BAG_ACTIONS.Add);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!sizeIsSelected) {
      setErrorMessage(ErrorMessage);
      return;
    }

    try {
      if (jewelry.category === EarringId) {
        const sizeId = jewelry.sizes[0]._id;

        await addToBagHandler({ size: sizeId }, jewelry._id);
      } else {
        await addToBagHandler(selectedSize, jewelry._id);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return {
    sizes,
    isSoldOut,
    loading,
    jewelry,
    leftIsSelected,
    rightIsSelected,
    sizeIsSelected,
    errorMessage,
    toggleSelected,
    changeHandler,
    onSubmit,
    selectedSize,
    setSizeIsSelected,
    setErrorMessage,
  };
};
