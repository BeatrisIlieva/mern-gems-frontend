import { Button } from "../../../reusable/Button/Button";

import { useBagContext } from "../../../../contexts/BagContext";

export const Remove = ({ bagId }) => {
  const { remove } = useBagContext();

  return (
    <Button
      title={"Remove"}
      callBackFunction={() => remove(bagId)}
      variant={"underlined"}
    />
  );
};
