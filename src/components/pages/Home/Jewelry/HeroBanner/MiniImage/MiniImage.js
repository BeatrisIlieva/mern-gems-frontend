import styles from "./MiniImage.module.css";

export const MiniImages = ({ imageUrl, variant }) => {
  return (
    <div className={`${styles["mini-image"]} ${styles[variant]}`}>
      <img
        className={styles["wave-effect"]}
        src={imageUrl}
        alt="Forget-Me-Not-Collection"
      />
    </div>
  );
};
