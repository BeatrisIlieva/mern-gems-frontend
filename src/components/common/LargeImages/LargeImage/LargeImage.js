import styles from "./LargeImage.module.css";

export const LargeImage = ({ jewelriesByCategory, firstImageUrlIsActive }) => {
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
            ? jewelriesByCategory[0].firstImageUrl
            : jewelriesByCategory[0].secondImageUrl
        }
        alt={jewelriesByCategory[0].title}
      />
    </div>
  );
};
