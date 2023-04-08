import React from "react";
import Stars from "./StarBar";

function Item( { item, onDeleteItem }) {

    function handleDeleteClick() {
        onDeleteItem(item)
    }

    return (
        <ul className="card">
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <Stars 
            stars={item.stars}
            itemID = {item.id}/>
            <button onClick={handleDeleteClick}>Delete this menu item</button>
            <br></br>
        </ul>
    )
}

export default Item;