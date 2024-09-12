import { Button } from "../../../../reusable/Button/Button";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";
import { useBagContext } from "../../../../../contexts/BagContext";

import { REMOVE_FROM_BAG_BUTTON_TITLE } from "../../../../../constants/languageRelated";

export const Remove = ({ bagId }) => {
  const { language } = useLanguageContext();

  const { remove } = useBagContext();

  return (
    <Button
      title={REMOVE_FROM_BAG_BUTTON_TITLE[language]}
      callBackFunction={() => remove(bagId)}
      variant={"underlined"}
    />
  );
};
