import React, { useState } from "react";
import Stars from "./StarBar";

function Item( { item, onDeleteItem }) {

    const [areYouSure, setSure] = useState(false)
    const [justRated, setJustRated] = useState(false)
    const [justReset, setJustReset] = useState(false)

    function handleDeleteClick() {
        areYouSure ? onDeleteItem(item) : setSure(true)
    }


    return (
        <div>
            <h3>{item.name}</h3>
            <img className = 'itemImage' src={item.image} alt={item.name} />
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <Stars 
            setJustRated={setJustRated}
            setJustReset={setJustReset}
            stars={item.stars}
            itemID = {item.id}/>
            <p style={{color: 'firebrick'}}>{(justRated && !justReset) ? 'Thanks for rating!' : null}</p>
            <button onClick={handleDeleteClick}>Delete this menu item</button>
            <p style={{color: 'firebrick'}}>{areYouSure ? 'Are you sure?': null}</p>
            <br></br>
        </div>
    )
}

export default Item;