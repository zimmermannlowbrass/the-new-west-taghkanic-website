import React from "react";
import Item from "./Item";

function DrinkItemList( {items} ) {

    function createCard(item) {
        return (
            <Item 
            item = {item}
            key = {item.id}
            />
        )
    }
    const drinkItemCards = items.map(item => createCard(item))


    return (
        <div>
            <h1>Drinks</h1>
            {drinkItemCards}
        </div>
    )
}

export default DrinkItemList;