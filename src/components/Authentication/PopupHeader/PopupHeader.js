import styles from "./PopupHeader.module.css";

export const PopupHeader = ({ title }) => {
  return (
    <section className={styles["header"]}>
      <img
        className={styles["image"]}
        src={
          "https://res.cloudinary.com/deztgvefu/image/upload/v1714938396/template_images/Screenshot_2024-05-05_at_22.42.20-removebg-preview_xfkrvq.png"
        }
        alt="logo"
      />
      <h2 className={styles["title"]}>{title}</h2>
    </section>
  );
};
