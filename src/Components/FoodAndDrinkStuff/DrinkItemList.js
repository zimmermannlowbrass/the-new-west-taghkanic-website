import React from "react";
import Item from "./Item";
import Feedback from "./Feedback";

function DrinkItemList( { items, onAddItem, onDeleteItem } ) {

    function createCard(item) {
        return (
            <div key = {item.id} className='cardContainer'>
                <Item 
                item = {item}
                onDeleteItem = {onDeleteItem}
                />
                <br />
            </div>
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