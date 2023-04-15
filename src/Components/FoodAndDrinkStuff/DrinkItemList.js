import React from "react";
import Item from "./Item";
import Feedback from "./Feedback";

function DrinkItemList( { items, onAddItem, onDeleteItem, onChangeCheckOutCart } ) {

    function createCard(item) {
        return (
            <div key = {item.id} className='cardContainer'>
                <Item 
                item = {item}
                onDeleteItem = {onDeleteItem}
                onChangeCheckOutCart = {onChangeCheckOutCart}
                />
                <br />
            </div>
        )
    }
    const drinkItemCards = items.map(item => createCard(item))


    return (
        <div>
            <h1 className="subSectionTitle">Drink Section</h1>
            <br />
            {drinkItemCards}
            <Feedback 
            type='drink'
            onAddItem = {onAddItem}
            />
        </div>
    )
}

export default DrinkItemList;