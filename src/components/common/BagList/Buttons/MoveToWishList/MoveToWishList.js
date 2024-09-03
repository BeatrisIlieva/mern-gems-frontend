import { Button } from "../../../../reusable/Button/Button";

import { useBagContext } from "../../../../../contexts/BagContext";

export const MoveToWishlist = ({ bagId }) => {
  const { remove } = useBagContext();

  const clickHandler = () => {
    remove(bagId)
  }

  return (
    <Button
      title={"Move To Wishlist"}
      callBackFunction={clickHandler}
      variant={"underlined"}
    />
  );
};
