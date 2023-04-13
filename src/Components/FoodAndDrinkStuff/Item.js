import React from "react";
import Stars from "./StarBar";

function Item( { item, onDeleteItem }) {

    function handleDeleteClick() {
        onDeleteItem(item)
    }

    return (
        <div>
            <h3>{item.name}</h3>
            <img className = 'itemImage' src={item.image} alt={item.name} />
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <Stars 
            stars={item.stars}
            itemID = {item.id}/>
            <button onClick={handleDeleteClick}>Delete this menu item</button>
            <br></br>
        </div>
    )
}

export default Item;