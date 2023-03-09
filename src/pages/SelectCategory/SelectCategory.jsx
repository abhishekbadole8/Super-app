import React, { useState } from "react";
import Styles from "../SelectCategory/SelectCategory.module.css"
import Cards from "../../components/Cards/Cards"
import Category from "../../components/Category/Category"

function SelectCategory() {
    const [cards, setCards] = useState([])

    return (
        <div className={Styles.Container}>
            <Category cards={cards} setCards={setCards} />
            <Cards cards={cards} setCards={setCards} />
            
        </div>
    )
}
export default SelectCategory;