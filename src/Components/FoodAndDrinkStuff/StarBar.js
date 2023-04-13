import React, { useState } from "react";

function Stars( { stars, itemID } ) {
    const star = '☆'
    const likedStar = '★'

    const [starCount, setStarCount] = useState(stars)

    function handleStarClick(e) {
        setStarCount(e.target.value)
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
        <h4 className="starSection" onClick={handleStarClick}>
            <button value='0'>Reset</button>
            <button value='1' style={starCount < 1 ? null :{color: 'red'}}>{starCount < 1 ? star : likedStar}</button>
            <button value='2' style={starCount < 2 ? null :{color: 'red'}}>{starCount < 2 ? star : likedStar}</button>
            <button value='3' style={starCount < 3 ? null :{color: 'red'}}>{starCount < 3 ? star : likedStar}</button>
            <button value='4' style={starCount < 4 ? null :{color: 'red'}}>{starCount < 4 ? star : likedStar}</button>
            <button value='5' style={starCount < 5 ? null :{color: 'red'}}>{starCount < 5 ? star : likedStar}</button>
        </h4>
    )
}

export default Stars;