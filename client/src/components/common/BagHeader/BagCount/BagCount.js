import { memo } from "react";

import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useBagContext } from "../../../../contexts/BagContext";

import { ITEM_NAMING } from "./constants/languageRelated";

import styles from "./BagCount.module.css";

export const BagCount = memo(() => {
  const { language } = useLanguageContext();

  const { bagTotalQuantity } = useBagContext();

  return (
    <h4 className={styles["title"]}>
      {bagTotalQuantity > 1
        ? `(${bagTotalQuantity} ${ITEM_NAMING[language]["plural"]})`
        : `(${bagTotalQuantity} ${ITEM_NAMING[language]["singular"]})`}
    </h4>
  );
});
