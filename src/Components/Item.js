import React from "react";

function Item( { item }) {
    return (
        <div>
            {item.name}
            <br></br>
            <img src={item.image} alt={item.name} />
        </div>
    )
}

export default Item;