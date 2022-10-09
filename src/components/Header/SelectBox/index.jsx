import React, { useState } from "react";
import seherler from "../../../api/seherler.json";
import styles from "./style.module.css";

function Index({ setIsSelectBox, setCity }) {
  const handleClick = (e) => {
    setCity(e);
    setIsSelectBox(false);
  };

  return (
    <div className={styles.selectBox}>
      {seherler.map((item, index) => {
        return (
          <div
            className={styles.selectItem}
            key={index}
            onClick={() => handleClick(item)}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
