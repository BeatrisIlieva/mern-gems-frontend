export const Button = ({ title, callbackFunction }) => {
  return (
    <button className={styles["button"]} onClick={() => callbackFunction()}>
      {title}
    </button>
  );
};
