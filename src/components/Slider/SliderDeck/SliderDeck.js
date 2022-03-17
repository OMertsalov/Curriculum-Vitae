import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import styles from "./SliderDeck.module.css";

function SliderDeck({ data }) {
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
    console.log("hello");
    const colors = [
      "red",
      "blue",
      "orange",
      "purple",
      "green",
      "pink",
      "white",
      "grey",
      "yellow",
      "aqua",
      "brown",
      "blueviolet",
    ];
    const deckDiv = deckRef.current;
    let middle_card_by_index = Math.floor(data.length / 2);

    let center = {
      x: parseFloat(deckDiv.offsetWidth) / 2,
      y: parseFloat(deckDiv.offsetHeight) / 2,
    };
    let new_x = 0;
    let new_y = 0;
    let new_zIndex = 0;
    const newCards = data.map((element, i) => {
      if (i < middle_card_by_index) {
        //left side of the deck
        new_x = center.x - 220 * (middle_card_by_index - i);
        new_y = center.y;
        new_zIndex = i;
      } else {
        // right side of the deck
        new_x = center.x + 220 * (i - middle_card_by_index);
        new_y = center.y;
        new_zIndex = i * -1.0;
      }

      let index = i;
      if (index >= colors.length) index -= colors.length;

      return (
        <Card
          key={i}
          x={new_x}
          y={new_y}
          zIndex={i === middle_card_by_index ? 100 : new_zIndex}
          name={element.name}
          color={colors[index]}
        />
      );
    });
    setCards(newCards);
  }, [data]);

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
      <div>
        <div ref={deckRef} className={styles.Deck}>
          <div>{cards}</div>
          <button
            disabled={animationIn}
            className={styles.PrevButton}
            onClick={clickPrev}
          />
          <button
            disabled={animationIn}
            className={styles.NextButton}
            onClick={clickNext}
          />
        </div>
      </div>
    </div>
  );
}

export default SliderDeck;
