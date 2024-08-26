import styles from "./JewelryCard.module.css";

export const JewelryCard = ({ firstImageUrl, jewelryTitle }) => {
  return (
    <div className={styles["thumbnail"]}>
      <img
        src={firstImageUrl}
        alt={jewelryTitle}
        className={`${styles["image"]}`}
      />
    </div>
  );
};
