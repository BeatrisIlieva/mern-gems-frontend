import { Link } from "react-router-dom";

import { NormalTitle } from "../../../reusable/NormalTitle/NormalTitle";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MiniHeader.module.css";

export const MiniHeader = () => {
  return (
    <header id="header" className={styles["mini-header"]}>
      <Link to={"/users/shopping-bag"} className={styles["wrapper"]}>
        <FontAwesomeIcon icon={faArrowLeftLong} className={styles["icon"]} />
        <NormalTitle title={"Go To Bag"} />
      </Link>
      <div>
        <img
          className={styles["logo-image"]}
          src={
            "https://res.cloudinary.com/deztgvefu/image/upload/v1724933359/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl.png"
          }
          alt="logo-image"
        />
      </div>
    </header>
  );
};
