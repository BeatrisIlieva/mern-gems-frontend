import { useJewelryItemContext } from "../../../../contexts/JewelryItemContext";

export const Description = () => {
  const { jewelry, categoryIsEarring } = useJewelryItemContext();

  return (
    <p className={styles["description"]}>
      {jewelry.description}.{" "}
      {jewelry.sizes && categoryIsEarring && jewelry.sizes[0].measurement}
    </p>
  );
};
