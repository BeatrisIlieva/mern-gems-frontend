import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import * as jewelryItemService from "../../services/jewelryItemService";

const SizeFormKeys = {
  Size: "size",
};

const EarringId = 2;

export const JewelryItem = () => {
  const [loading, setLoading] = useState(true);

  const { jewelryId } = useParams();
  const [jewelry, setJewelry] = useState([]);

  const [sizeIsSelected, setSizeIsSelected] = useState(true);

  useEffect(() => {
    setLoading(true);

    jewelryItemService
      .getOne(jewelryId)
      .then((data) => {
        setJewelry(data[0]);
        setSizeIsSelected(data[0].category === EarringId);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <img src={jewelry.firstImageUrl} alt={jewelry.title} />;
};
