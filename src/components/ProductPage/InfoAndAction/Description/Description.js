export const Description = () => {
  return (
    <p className={styles["description"]}>
      {jewelry.description}.{" "}
      {jewelry.sizes && categoryIsEarring && jewelry.sizes[0].measurement}
    </p>
  );
};
