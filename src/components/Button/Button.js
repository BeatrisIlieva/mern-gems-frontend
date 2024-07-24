import styles from "./Button.module.css";

export const Button = ({ variant, title }) => {
  return <button className={styles[variant]}>{title}</button>;
};
