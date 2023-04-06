import React from "react";
import Item from "./Item";
import Feedback from "./Feedback";

function MealItemList( {items} ) {

    function createCard(item) {
        return (
            <Item 
            item = {item}
            key = {item.id}
            />
        )
    }
    const mealItemCards = items.map(item => createCard(item))
    
    return (
        <div>
            <h1>Meals</h1>
            {mealItemCards}
            <Feedback type = {'meal'}/>
        </div>
        
    )
}

export default MealItemList;