import React from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({ id, label, value }) {
  let description = "Beginner";
  if (value > 49 && value < 89) {
    description = "Intermediate";
  } else if (value > 89 && value < 100) {
    description = "B2+";
  } else if (value >= 100) {
    description = "Fluent";
  }
  return (
    <div className={styles.ProgressBar}>
      <label htmlFor={id}>{label}</label>
      <progress id={id} max="100" value={value}></progress>
      <p>{description}</p>
    </div>
  );
}

export default ProgressBar;
