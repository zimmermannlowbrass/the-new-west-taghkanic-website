import React from "react";
import Item from "./Item";
import Feedback from "./Feedback";

function DrinkItemList( { items, onAddItem } ) {

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
            <Feedback 
            type='drink'
            onAddItem = {onAddItem}
            />
        </div>
    )
}

export default DrinkItemList;