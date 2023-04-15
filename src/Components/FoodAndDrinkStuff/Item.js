import React, { useState } from "react";
import Stars from "./StarBar";

function Item( { item, onDeleteItem, onChangeCheckOutCart }) {

    const [areYouSure, setSure] = useState(false)
    const [justRated, setJustRated] = useState(false)
    const [justReset, setJustReset] = useState(false)
    const [inCart , setInCart] = useState(0)

    function handleDeleteClick() {
        areYouSure ? onDeleteItem(item) : setSure(true)
    }

    function handleClick(e) {
        if (e.target.value === '+') {
            setInCart((inCart)=> ++inCart)
        } else if (e.target.value === '-' && inCart > 0) {
            setInCart((inCart)=> --inCart)
        }    
    }

    function handleAddToCart(){
        if (inCart > 0){
            const total = inCart * item.price
            onChangeCheckOutCart(inCart, item, total)
        }
    }

    return (
        <div>
            <h3>{item.name}</h3>
            <img className = 'itemImage' src={item.image} alt={item.name} />
            <p>Price: {item.price}</p>
            <div>
                <button value='+' onClick={(e) => handleClick(e)}>+</button><button value='-' onClick={(e) => handleClick(e)}>-</button>{' '}
                <button onClick={() => handleAddToCart()} >Add to cart : {inCart}</button>
            </div>
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