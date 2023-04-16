import React from 'react';


function CheckOut({ checkOutCart, onRemoveFromCart }) {

    const items = checkOutCart.map(item => {
        return (
            <div className='checkOutContainer' key={checkOutCart.indexOf(item)}>
                <h3>
                    {item.name}
                    <br/>
                    Quantity: {item.quantity}
                    <br />
                    Subtotal : $ {item.price}
                    <button onClick={() => onRemoveFromCart(item)}>Remove from cart</button>
                </h3>
                <img className='checkOutImage' src={item.image} alt={item.name} />
                <br />
            </div>
        )
    })
    
    const subTotals = checkOutCart.map(item => item.price)

    const total = subTotals.reduce((a,b) => a + b, 0)
    
    return (
        <div>
            <h1 className="subSectionTitle">Check-Out</h1>
            <h2>Total: ${Math.round(total * 100) / 100} </h2>
            <br />
            {items}
        </div>
    )
}


export default CheckOut;