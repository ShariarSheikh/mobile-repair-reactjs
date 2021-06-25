import React from "react";
import styles from "../../styles/pagesStyles/Stores.module.css";
import StoresHero from "./components/StoresHero";
import Location from "./components/Locations";


const Stores = () => {
  return (
    <div className={styles.Stores}>
      <StoresHero />
      <Location/>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Stores;
