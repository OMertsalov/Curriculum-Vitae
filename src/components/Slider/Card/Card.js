import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  console.log(process.env.PUBLIC_URL + props.image);
  return (
    <div
      className={styles.Card}
      style={{
        left: `${props.x}px`,
        top: `${props.y}px`,
        zIndex: props.zIndex,
        height: props.size / 2,
        width: props.size,
      }}
    >
      <img
        className={styles.Image}
        src={process.env.PUBLIC_URL + props.image}
        alt="slider"
      />
    </div>
  );
}

export default React.memo(Card);
