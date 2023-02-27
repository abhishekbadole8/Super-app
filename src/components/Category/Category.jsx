import React from "react";
import Styles from "../Category/Category.module.css"

// Tags 
function Category({ cards, setCards }) {

    function handelChange(id) {
        const newCards = cards.filter((card) => {
            return card.id !== id;
        });

        setCards(newCards);
    }

    return (
        <div className={Styles.leftContainer}>

            <h3 className={Styles.logo}>Super app</h3>
            <div className={Styles.heading}>
                <h2>Choose your entertainment category</h2>
            </div>

            <div className={Styles.tagsContainer}>
                {cards.map((card) => {
                    return (
                        <div key={card.id} className={Styles.CategoryTags}>
                            <span className={Styles.CategoryName}>{card.name}</span>
                            <span className={Styles.CategoryNameCancel}
                                onClick={() => { handelChange(card.id) }}>X</span>
                        </div>
                    );
                })}

            </div>

        </div >
    )
}
export default Category;