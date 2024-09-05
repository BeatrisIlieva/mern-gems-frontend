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
      src={
        firstImageUrlIsActive
          ? jewelriesByCategory[0].firstImageUrl
          : jewelriesByCategory[0].secondImageUrl
      }
      alt={jewelriesByCategory[0].title}
      onClick={clickHandler}
    />
  );
};
