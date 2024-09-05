export const Image = ({
  firstImageUrlIsActive,
  firstImageUrl,
  secondImageUrl,
  title,
  clickHandler,
}) => {
  return (
    <img
      className={`${styles["images"]} ${
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
