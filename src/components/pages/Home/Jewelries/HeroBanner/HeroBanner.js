import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <div id={styles["hero-banner"]}>
      <h1 className={styles["title"]}>Forget-Me-Not Collection</h1>
      <p className={styles["paragraph"]}>
        The enchanting and delicate beauty of a Forget-Me-Not flower in bloom is
        captured in a series of fine jewelry designs that celebrate the endless
        beauty of nature’s greatest gifts – rare gemstones and flowers in bloom.
      </p>
    </div>
  );
};
