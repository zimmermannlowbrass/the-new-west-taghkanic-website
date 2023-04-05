import React from "react";
import Item from "./Item";

function ItemList( {items} ) {

    const mealItems = items.filter(item => item.type === 'meal')
    const sideItems = items.filter(item => item.type === 'side')
    const drinkItems = items.filter(item => item.type === 'drink')


    function createCard(item) {
        return (
            <Item 
            item = {item}
            key = {item.id}
            />
        )
    }
    const mealItemCards = mealItems.map(item => createCard(item))
    const sideItemCards = sideItems.map(item => createCard(item))
    const drinkItemCards = drinkItems.map(item => createCard(item))

    
    return (
        <div>
            <h1>Meal</h1>
            {mealItemCards}
            <h1>Side</h1>
            {sideItemCards}
            <h1>Drinks</h1>
            {drinkItemCards}
        </div>
        
    )
}

export default ItemList;