import styles from "./MiniImage.module.css";

export const MiniImage = ({ imageUrl, variant, waveEffect }) => {
  return (
    <div className={`${styles["mini-image"]} ${styles[variant]}`}>
      <img
        className={styles[waveEffect]}
        src={imageUrl}
        alt="Forget-Me-Not-Collection"
      />
    </div>
  );
};
