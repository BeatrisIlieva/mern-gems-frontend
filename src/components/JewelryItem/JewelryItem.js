import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import * as jewelryItemService from "../../services/jewelryItemService";

const SizeFormKeys = {
  Size: "size",
};

export const JewelryItem = () => {
  const [loading, setLoading] = useState(true);

  const { jewelryId } = useParams();
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    setLoading(true);

    jewelryItemService
      .getOne()
      .then((data) => {
        setJewelry(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  });
};
