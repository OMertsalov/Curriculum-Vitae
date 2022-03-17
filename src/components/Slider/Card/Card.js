import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div
      className={styles.Card}
      style={{
        backgroundColor: props.color,
        left: `${props.x}px`,
        top: `${props.y}px`,
        zIndex: props.zIndex,
      }}
    >
      {props.name}
    </div>
  );
}

export default React.memo(Card);
