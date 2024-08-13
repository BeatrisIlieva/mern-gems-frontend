import { Link } from "react-router-dom";

import { NormalTitle } from "../../reusable/NormalTitle/NormalTitle";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MiniHeader.module.css";

export const MiniHeader = () => {
  return (
    <header className={styles["mini-header"]}>
      <Link to={"/users/shopping-bag"} className={styles["wrapper"]}>
        <FontAwesomeIcon icon={faArrowLeftLong} className={styles["icon"]} />
        <NormalTitle title={"Go To Bag"} />
      </Link>
      <div>
        <img
          className={styles["logo-image"]}
          src={
            "https://res.cloudinary.com/deztgvefu/image/upload/v1719057213/template_images/Screenshot_2024-06-22_at_14.52.43_xrdvgt.png"
          }
          alt="logo-image"
        />
      </div>
    </header>
  );
};
