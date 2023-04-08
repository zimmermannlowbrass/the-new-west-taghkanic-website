import React from "react";

function Banner() {
    return (
        <div>
            <header>
                <b>Welcome to the West Taghkanic Diner!</b>
            </header>
            <h2>A retro diner featuring locally sourced ingredients, house smoked meats, and fresh baked pastries.</h2>
            <img id='diner' src={require ('../diner.jpeg')} alt='diner' />
        </div>
    )
}

export default Banner;