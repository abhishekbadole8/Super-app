import React from "react";
import Styles from "../Cards/Cards.module.css"
import CategoryArray from "../../pages/SelectCategory/CategoryArray";
import { useNavigate } from "react-router-dom";


// Select Cards
function Cards({ cards, setCards }) {

    const navigate = useNavigate();

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
    
    const handleClick = () => {
        if(cards.length>=1){
            console.log("all ok")
            localStorage.setItem("CategoryValue", JSON.stringify(cards))
            navigate("/Homepage");
        }else{
            console.log("not ok")

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
                        <img src={card.img} alt=""/>
                    </button>
                );
            })}
            <div className={Styles.btn} onClick={handleClick}>
                <label to="/Homepage">Next Page</label>
                
            </div>
            {/* <p className={Styles.errorText}>sleedvvdsver</p> */}
        </div>
    )
}
export default Cards;