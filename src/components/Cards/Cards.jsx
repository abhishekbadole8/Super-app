import React from "react";
import Styles from "../Cards/Cards.module.css"
import CategoryArray from "../../pages/SelectCategory/CategoryArray";

// Select Cards
function Cards({ cards, setCards }) {

    function handelChange(card) {

        const findCard = cards.filter((_card) => {
            return card.id === _card.id;
        });

        if (findCard.length === 0) {
            setCards([...cards, card]);
        }

        else {
            const newCards = cards.filter((_card) => {
                return _card.id !== card.id;
            });
            setCards(newCards);
        }
    }

    return (
        <div className={Styles.rightContainer}>
            {CategoryArray.map((card) => {
                return (
                    <button key={card.id}
                        className={Styles.cardContainer}
                        style={{ backgroundColor: card.bgColor }}
                        onClick={() => handelChange(card)}
                    >
                        <p>{card.name}</p>
                        <img src={card.img} />
                    </button>
                );
            })}
            <div className={Styles.btn}>
                <label>Next Page</label>
            </div>
        </div>
    )
}
export default Cards;