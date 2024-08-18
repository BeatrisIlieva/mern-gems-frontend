import styles from "./LargeImages.module.css";

export const LargeImages = ({ firstImageUrlIsActive, entity, colorIndex }) => {
  return (
    <div className={styles["thumbnail"]}>
      <img
        className={`${styles["image"]} ${
          firstImageUrlIsActive
            ? styles["slide-in-right"]
            : styles["slide-in-left"]
        }`}
        src={
          firstImageUrlIsActive
            ? entity[colorIndex].firstImageUrl
            : entity[colorIndex].secondImageUrl
        }
        alt={entity[colorIndex].title}
      />
    </div>
  );
};
