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

  return (
    <div className={styles.Card} style={cardStyle}>
      <h3 className={styles.Name}>{props.name}</h3>
      <img
        style={{
          boxShadow: props.isActiveCard
            ? "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            : "",
        }}
        className={styles.Image}
        src={process.env.PUBLIC_URL + props.image}
        alt="skill"
      />
      <div style={{ opacity: props.isActiveCard ? 1 : 0 }}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default React.memo(Card);
