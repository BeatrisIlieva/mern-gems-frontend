import styles from "./HorizontalLine.module.css";

export const HorizontalLine = ({ variantHorizontalLine, variantHr }) => {

  return (
    <div
      className={
        variantHorizontalLine === "header"
          ? styles["horizontal-line-header"]
          : styles["horizontal-line"]
      }
    >
      <hr className={`${styles["hr-line"]} ${styles[variantHr]}`} />
      <img
        className={styles["line-img"]}
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1707499296/template_images/giphy_s_b3cfly_1_b0dwbo.gif"
        alt=""
      />
      <hr className={`${styles["hr-line"]} ${styles[variantHr]}`} />
    </div>
  );
};
