import styles from "./Image.module.css"

export const Image = ({ image, title }) => {
  return <img className={styles["image"]} src={image} alt={title} />;
};
