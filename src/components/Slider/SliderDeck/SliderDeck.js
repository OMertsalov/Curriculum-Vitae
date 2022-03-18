import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import styles from "./SliderDeck.module.css";

function SliderDeck({ data, size }) {
  const deckRef = useRef();

  const [cards, setCards] = useState([]);
  const [animationIn, setAnimationIn] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const autoScrollTimer = useRef(null);

  const clickNext = useCallback(() => {
    if (cards.length > 1) {
      setAnimationIn(true);
      const deckDiv = deckRef.current.children[0];
      const deckDivChildren = deckDiv.children;
      let lastCardLeft = deckDivChildren[deckDivChildren.length - 1].style.left;
      let lastCardZIndex =
        deckDivChildren[deckDivChildren.length - 1].style.zIndex;

      for (let i = deckDivChildren.length - 1; i > 0; i--) {
        deckDivChildren[i].style.transitionDuration = "0.6s";
        deckDivChildren[i].style.left = deckDivChildren[i - 1].style.left;
        deckDivChildren[i].style.zIndex = deckDivChildren[i - 1].style.zIndex;
        deckDivChildren[i].style.top = deckDivChildren[i - 1].style.top;
        deckDivChildren[i].style.boxShadow =
          deckDivChildren[i - 1].style.boxShadow;
        deckDivChildren[i].children[1].style.opacity =
          deckDivChildren[i - 1].children[1].style.opacity;
      }

      deckDivChildren[0].style.transitionDuration = "0.2s";

      setTimeout(() => {
        deckDivChildren[0].style.transitionDuration = "0.0s";
        deckDivChildren[0].style.left = lastCardLeft;
        deckDivChildren[0].style.zIndex = lastCardZIndex;

        deckDiv.appendChild(deckDivChildren[0]);

        setTimeout(() => {
          deckDivChildren[deckDivChildren.length - 1].style.transitionDuration =
            "0.2s";
          setAnimationIn(false);
        }, 100);
      }, 700);
    }
  }, [cards]);

  const clickPrev = useCallback(() => {
    if (cards.length > 1) {
      setAnimationIn(true);
      const deckDiv = deckRef.current.children[0];
      const deckDivChildren = deckDiv.children;
      let firstCardLeft = deckDivChildren[0].style.left;
      let firstCardZIndex = deckDivChildren[0].style.zIndex;

      for (let i = 0; i < deckDivChildren.length - 1; i++) {
        deckDivChildren[i].style.transitionDuration = "0.6s";
        deckDivChildren[i].style.left = deckDivChildren[i + 1].style.left;
        deckDivChildren[i].style.zIndex = deckDivChildren[i + 1].style.zIndex;
        deckDivChildren[i].style.top = deckDivChildren[i + 1].style.top;
        deckDivChildren[i].style.boxShadow =
          deckDivChildren[i + 1].style.boxShadow;
        deckDivChildren[i].children[1].style.opacity =
          deckDivChildren[i + 1].children[1].style.opacity;
      }

      deckDivChildren[deckDivChildren.length - 1].style.transitionDuration =
        "0.2s";

      setTimeout(() => {
        deckDivChildren[deckDivChildren.length - 1].style.transitionDuration =
          "0.0s";
        deckDivChildren[deckDivChildren.length - 1].style.left = firstCardLeft;
        deckDivChildren[deckDivChildren.length - 1].style.zIndex =
          firstCardZIndex;

        deckDiv.insertBefore(
          deckDivChildren[deckDivChildren.length - 1],
          deckDivChildren[0]
        );

        setTimeout(() => {
          deckDivChildren[0].style.transitionDuration = "0.2s";
          setAnimationIn(false);
        }, 100);
      }, 700);
    }
  }, [cards]);

  useEffect(() => {
    const deckDiv = deckRef.current;
    const dataWithImage = data.filter(
      (element) => element.img && element.img.length
    );
    let middle_card_by_index = Math.floor(dataWithImage.length / 2);

    let center = {
      x: parseFloat(deckDiv.offsetWidth) / 2,
      y: parseFloat(deckDiv.offsetHeight) / 2,
    };
    let new_x = 0;
    let new_y = 0;
    let new_zIndex = 0;
    const newCards = dataWithImage.map((element, i) => {
      if (i < middle_card_by_index) {
        //left side of the deck
        new_x = center.x - (size + 40) * (middle_card_by_index - i);
        new_y = i === middle_card_by_index ? center.y - 20 : center.y;
        new_zIndex = i;
      } else {
        // right side of the deck
        new_x = center.x + (size + 40) * (i - middle_card_by_index);
        new_y = i === middle_card_by_index ? center.y - 20 : center.y;
        new_zIndex = i * -1.0;
      }
      return (
        <Card
          key={i}
          x={new_x}
          y={new_y}
          zIndex={i === middle_card_by_index ? 100 : new_zIndex}
          name={element.name}
          description={element.description}
          size={size}
          image={element.img}
          isActiveCard={i === middle_card_by_index}
        />
      );
    });
    setCards(newCards);
  }, [data, size]);

  useEffect(() => {
    if (autoScroll) autoScrollTimer.current = setInterval(clickNext, 2000);
    else clearInterval(autoScrollTimer.current);
    return () => clearInterval(autoScrollTimer.current);
  }, [autoScroll, cards, clickNext]);

  return (
    <div
      onMouseEnter={() => setAutoScroll(false)}
      onMouseLeave={() => setAutoScroll(true)}
      className={styles.Container}
    >
      <div
        ref={deckRef}
        className={styles.Deck}
        style={{ height: size, width: size + 40 }}
      >
        <div>{cards}</div>
        <button
          disabled={animationIn}
          style={{ right: size }}
          onClick={clickPrev}
        />
        <button
          disabled={animationIn}
          style={{ left: size }}
          onClick={clickNext}
        />
      </div>
    </div>
  );
}

export default SliderDeck;
