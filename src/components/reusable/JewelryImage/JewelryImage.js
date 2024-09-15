import styles from "./JewelryImage.module.css";

export const JewelryImage = ({
  firstImageUrlIsActive,
  firstImageUrl,
  secondImageUrl,
  title,
  clickHandler,
}) => {
  return (
    <img
      className={`${styles["jewelry-image"]} ${
        firstImageUrlIsActive
          ? styles["slide-in-right"]
          : styles["slide-in-left"]
      }`}
      src={firstImageUrlIsActive ? firstImageUrl : secondImageUrl}
      alt={title}
      onClick={clickHandler}
    />
  );
};
