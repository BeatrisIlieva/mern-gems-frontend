import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <>
      <div className={styles["text-wrapper"]}>
        <div className={styles["text-thumbnail"]}>
          <img
            className={styles["logo-text"]}
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1725291440/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl_1_qybyju.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles["logo-wrapper"]}>
        <div className={styles["thumbnail"]}>
          <img
            className={styles["logo-image"]}
            src={
              "https://res.cloudinary.com/deztgvefu/image/upload/v1726147711/forget-me-not-collection/miniImages/logo2_zfmuo1.png"
            }
            alt="logo-image"
          />
        </div>
      </div>
    </>
  );
};
