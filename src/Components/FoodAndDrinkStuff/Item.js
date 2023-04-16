import React, { useState } from "react";
import Stars from "./StarBar";

function Item( { item, onDeleteItem, onChangeCheckOutCart }) {

    const [areYouSure, setSure] = useState(false)
    const [justRated, setJustRated] = useState(false)
    const [justReset, setJustReset] = useState(false)
    const [inCart , setInCart] = useState(0)
    const [justAddedtoCart, setJustAddedtoCart] = useState(false)

    function handleDeleteClick() {
        areYouSure ? onDeleteItem(item) : setSure(true)
    }

    function handleClick(e) {
        setJustAddedtoCart(false)
        if (e.target.value === '+') {
            setInCart((inCart)=> ++inCart)
        } else if (e.target.value === '-' && inCart > 0) {
            setInCart((inCart)=> --inCart)
        }    
    }

    function handleAddToCart(){
        if (inCart > 0){
            setJustAddedtoCart(true)
            const total = inCart * item.price
            onChangeCheckOutCart(inCart, item, total)
        }
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <img className = 'itemImage' src={item.image} alt={item.name} />
            <h3>Price: {item.price}</h3>
            <i>Includes {item.description}</i>
            <div>
                <br />
                <button value='+' onClick={(e) => handleClick(e)}>+</button><button value='-' onClick={(e) => handleClick(e)}>-</button>{' '}
                <button onClick={() => handleAddToCart()} >Add to cart: {inCart}</button>
                {justAddedtoCart ? <p style={{color: 'firebrick'}}>Added {inCart} to your cart!</p> : null}
            </div>
            <Stars 
            setJustRated={setJustRated}
            setJustReset={setJustReset}
            stars={item.stars}
            itemID = {item.id}
            />
            <p style={{color: 'firebrick'}}>{(justRated && !justReset) ? 'Thanks for rating!' : null}</p>
            <button onClick={handleDeleteClick}>{areYouSure ? "Yes, please delete this item." : "Delete this menu item"}</button>
            <p style={{color: 'firebrick'}}>{areYouSure ? 'Are you sure you want to delete this item?': null}</p>
            <br></br>
        </div>
    )
}

export default Item;