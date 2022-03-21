import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import styles from "./SliderDeck.module.css";

function shiftCardsStyles(firstCard, secondCard) {
  firstCard.style.transitionDuration = "0.6s";
  firstCard.style.left = secondCard.style.left;
  firstCard.style.zIndex = secondCard.style.zIndex;
  firstCard.style.top = secondCard.style.top;

  firstCard.children[1].style.display = secondCard.children[1].style.display;
  firstCard.getElementsByTagName("img")[0].style.boxShadow =
    secondCard.getElementsByTagName("img")[0].style.boxShadow;
}

function SliderDeck({
  data,
  containerHeight,
  containerWidth,
  imageHeight,
  imageWidth,
}) {
  const deckRef = useRef();

  const [cards, setCards] = useState([]);
  const [animationIn, setAnimationIn] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const autoScrollInterval = useRef(null);

  const onDeckClickHandler = useCallback(
    (isNextClicked) => {
      if (cards.length > 1) {
        setAnimationIn(true);
        const deckDiv = deckRef.current.children[0];
        const deckDivChildren = deckDiv.children;
        const lastShiftedCard = isNextClicked
          ? deckDivChildren[deckDivChildren.length - 1]
          : deckDivChildren[0];
        const lastShiftedCardStyleLeft = lastShiftedCard.style.left;
        const lastShiftedCardStyleZIndex = lastShiftedCard.style.zIndex;

        if (isNextClicked)
          for (let i = deckDivChildren.length - 1; i > 0; i--) {
            shiftCardsStyles(deckDivChildren[i], deckDivChildren[i - 1]);
          }
        else
          for (let i = 0; i < deckDivChildren.length - 1; i++) {
            shiftCardsStyles(deckDivChildren[i], deckDivChildren[i + 1]);
          }

        const cardToMove = isNextClicked
          ? deckDivChildren[0]
          : deckDivChildren[deckDivChildren.length - 1];

        cardToMove.style.transitionDuration = "0.2s";

        setTimeout(() => {
          cardToMove.style.transitionDuration = "0.0s";
          cardToMove.style.left = lastShiftedCardStyleLeft;
          cardToMove.style.zIndex = lastShiftedCardStyleZIndex;

          if (isNextClicked) deckDiv.appendChild(cardToMove);
          else deckDiv.insertBefore(cardToMove, deckDivChildren[0]);

          setTimeout(() => {
            const movedCard = isNextClicked
              ? deckDivChildren[deckDivChildren.length - 1]
              : deckDivChildren[0];
            movedCard.style.transitionDuration = "0.2s";
            setAnimationIn(false);
          }, 100);
        }, 700);
      }
    },
    [cards]
  );

  useEffect(() => {
    const deckDiv = deckRef.current;
    const dataWithImage = data.filter(
      (element) => element.img && element.img.length
    );
    let middle_card_by_index = Math.floor(dataWithImage.length / 2);

    const centerX = parseFloat(deckDiv.offsetWidth) / 2;
    const middleCardY = deckDiv.offsetHeight / 10;
    //   y: parseFloat(deckDiv.offsetHeight) / 2,
    // };
    let new_x = 0;
    let new_y = 0;
    let new_zIndex = 0;
    const newCards = dataWithImage.map((element, i) => {
      if (i < middle_card_by_index) {
        //left side of the deck
        new_x = centerX - (containerWidth + 40) * (middle_card_by_index - i);
        new_zIndex = i;
      } else {
        // right side of the deck
        new_x = centerX + (containerWidth + 40) * (i - middle_card_by_index);
        new_zIndex = i * -1.0;
      }
      new_y = i === middle_card_by_index ? middleCardY : middleCardY + 30;
      return (
        <Card
          key={i}
          x={new_x}
          y={new_y}
          zIndex={i === middle_card_by_index ? 100 : new_zIndex}
          name={element.name}
          description={element.description}
          // size={size}
          height={imageHeight}
          width={imageWidth}
          image={element.img}
          isActiveCard={i === middle_card_by_index}
        />
      );
    });
    setCards(newCards);
  }, [data, containerHeight, containerWidth, imageHeight, imageWidth]);

  useEffect(() => {
    if (autoScroll)
      autoScrollInterval.current = setInterval(
        () => onDeckClickHandler(true),
        3000
      );
    else clearInterval(autoScrollInterval.current);
    return () => clearInterval(autoScrollInterval.current);
  }, [autoScroll, cards, onDeckClickHandler]);

  return (
    <div
      onMouseEnter={() => setAutoScroll(false)}
      onMouseLeave={() => setAutoScroll(true)}
      className={styles.Container}
    >
      <div
        ref={deckRef}
        className={styles.Deck}
        style={{ height: containerHeight, width: containerWidth + 40 }}
      >
        <div>{cards}</div>
        <button
          disabled={animationIn}
          style={{ right: containerWidth }}
          onClick={() => onDeckClickHandler(false)}
        />
        <button
          disabled={animationIn}
          style={{ left: containerWidth }}
          onClick={() => onDeckClickHandler(true)}
        />
      </div>
    </div>
  );
}

export default SliderDeck;
