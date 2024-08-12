import styles from "./ContainerTitle.module.css";

export const ContainerTitle = ({ title }) => {
  return <h2 className={styles["title"]}>{title}</h2>;
};
