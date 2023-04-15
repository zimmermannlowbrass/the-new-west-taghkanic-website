import React from "react";
import Item from "./Item";
import Feedback from "./Feedback";

function MealItemList( { items, onAddItem, onDeleteItem } ) {

    function createCard(item) {
        return (
            <div key = {item.id} className = 'cardContainer'>
                <Item 
                item = {item}
                onDeleteItem = {onDeleteItem}
                />
                <br />
            </div>

        )
    }
    const mealItemCards = items.map(item => createCard(item))
    
    return (
        <div>
            <h1>Meals</h1>
            {mealItemCards}
            <Feedback 
            type = {'meal'}
            onAddItem = {onAddItem}
            />
        </div>
        
    )
}

export default MealItemList;