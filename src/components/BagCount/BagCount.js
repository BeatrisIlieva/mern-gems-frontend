import { NormalTitle } from "../NormalTitle/NormalTitle";

import { useBagContext } from "../../contexts/BagContext";


export const BagCount = () => {
    const { bagTotalQuantityIntoState } = useBagContext();

  return (
    <NormalTitle
      title={
        bagTotalQuantityIntoState > 1
          ? `(${bagTotalQuantityIntoState}) items`
          : `(${bagTotalQuantityIntoState}) item`
      }
    />
  );
};
