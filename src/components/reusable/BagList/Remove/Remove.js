import { Button } from "../../Button/Button";

import { useBagContext } from "../../../../contexts/BagContext";

import { useService } from "../../../../hooks/useService";

import { bagServiceFactory } from "../../../../services/bagService";

export const Remove = ({ bagId }) => {

  const bagService = useService(bagServiceFactory);

  const removeItem = async () => {
    await bagService.delete(bagId);

  };

  return (
    <Button
      title={"Remove"}
      callBackFunction={removeItem}
      variant={"underlined"}
    />
  );
};
