import React from "react";

function Banner() {
    return (
        <div>
            <header>Welcome to the Taghkanic Diner!</header>
            <img id='diner' src={require ('../diner.jpeg')} alt='diner' />
        </div>
    )
}

export default Banner;