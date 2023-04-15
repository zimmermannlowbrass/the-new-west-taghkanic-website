import React, { useState } from "react";

function Stars( { stars, itemID, setJustRated, setJustReset } ) {
    const star = '☆'
    const likedStar = '★'

    const [starCount, setStarCount] = useState(stars)

    function handleStarClick(e) {
        setStarCount(e.target.value)
        if (e.target.value > 0) {
            setJustRated(true)
            setJustReset(false)
        }
        fetch(`http://localhost:3000/breakfast/${itemID}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                stars : e.target.value
            })
        })
    }

    return (
        <div>
            <h4>What did you think of this item?</h4>
            <h4 className="starSection" onClick={handleStarClick}>
                <button value='0' onClick= {() => setJustReset(true)}>Reset</button>
                <button value='1' style={starCount < 1 ? null :{color: 'red'}}>{starCount < 1 ? star : likedStar}</button>
                <button value='2' style={starCount < 2 ? null :{color: 'red'}}>{starCount < 2 ? star : likedStar}</button>
                <button value='3' style={starCount < 3 ? null :{color: 'red'}}>{starCount < 3 ? star : likedStar}</button>
                <button value='4' style={starCount < 4 ? null :{color: 'red'}}>{starCount < 4 ? star : likedStar}</button>
                <button value='5' style={starCount < 5 ? null :{color: 'red'}}>{starCount < 5 ? star : likedStar}</button>
            </h4>
        </div>
    )
}

export default Stars;