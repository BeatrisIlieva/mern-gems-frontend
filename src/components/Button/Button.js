import styles from "./Button.module.css";

export const Button = ({ variant, title, callBackFunction }) => {
  return <button className={styles[variant]} onClick={() => callBackFunction()}>{title}</button>;
};
