import React from "react";
import Item from "./Item";
import Feedback from "./Feedback";

function MealItemList( { items, onAddItem, onDeleteItem, onChangeCheckOutCart } ) {

    function createCard(item) {
        return (
            <div key = {item.id} className = 'cardContainer'>
                <Item 
                item = {item}
                onDeleteItem = {onDeleteItem}
                onChangeCheckOutCart = {onChangeCheckOutCart}
                />
                <br />
            </div>

        )
    }
    const mealItemCards = items.map(item => createCard(item))
    
    return (
        <div>
            <h1 className="subSectionTitle">Meal Section</h1>
            <br />
            {mealItemCards}
            <Feedback 
            type = {'meal'}
            onAddItem = {onAddItem}
            />
        </div>
        
    )
}

export default MealItemList;