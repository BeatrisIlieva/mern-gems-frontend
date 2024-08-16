import { useState, useEffect } from "react";

import { useService } from "../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../services/jewelryService";

import { filterJewelriesByCategoryId } from "./helpers";

import { LoadingSpinner } from "../../JewelryList/LoadingSpinner/LoadingSpinner";

import {Bracelets} from "./Bracelets/Bracelets"

import styles from "./Jewelries.module.css";

export const Jewelries = () => {


  return (
  <section className={styles["jewelries"]}>
    <Bracelets/>
    </section>
    );
};
