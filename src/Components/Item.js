import React from "react";

function Item( { item }) {

    const ingredientsList = item.ingredients.map(ingredient => {
        return (
            <ul key={item.ingredients.indexOf(ingredient)}>{ingredient}</ul>
        )
    })

    return (
        <ul className="card">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <h5>Ingredients: {ingredientsList}</h5>
            <br></br>
            <img src={item.image} alt={item.name} />
        </ul>
    )
}

export default Item;