import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  let cardStyle = {
    left: `${props.x}px`,
    top: `${props.y}px`,
    zIndex: props.zIndex,
    height: props.size / 2,
    width: props.size,
  };

  if (props.isActiveCard) {
    cardStyle = {
      ...cardStyle,
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    };
  }

  return (
    <div className={styles.Card} style={cardStyle}>
      <img
        className={styles.Image}
        src={process.env.PUBLIC_URL + props.image}
        alt="slider"
      />
      <div style={{ opacity: props.isActiveCard ? 1 : 0 }}>
        <p>{props.name}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default React.memo(Card);
