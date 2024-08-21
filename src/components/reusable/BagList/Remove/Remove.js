import { Button } from "../../Button/Button";

import { useService } from "../../../../hooks/useService";

import { bagServiceFactory } from "../../../../services/bagService";

export const Remove = ({ bagId, inventoryId }) => {
  const bagService = useService(bagServiceFactory);

  const removeItem = async () => {
    await bagService.delete(bagId, inventoryId);
  };

  return (
    <Button
      title={"Remove"}
      callBackFunction={removeItem}
      variant={"underlined"}
    />
  );
};
