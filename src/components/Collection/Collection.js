import { Link } from "react-router-dom";

import styles from "./Collection.module.css";

export const Collection = ({ path, title, description, imageUrl, variant }) => {
  return (
    <Link to={path} className={styles["no-decoration"]}>
      <div className={styles[`${variant}`]}>
        <div className={styles["hero-text"]}>
          <h2 className={styles["title"]}>{title} Collection</h2>
          <p className={styles["paragraph"]}>{description}</p>
          <button className={styles["animated-button"]}>Discover</button>
        </div>
        <div className={styles["hero-img-container"]}>
          <img className={styles["hero-img"]} src={imageUrl} alt={title} />
        </div>
      </div>
    </Link>
  );
};
