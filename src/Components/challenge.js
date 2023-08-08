//This is a challenge

//- Add a controlled form that includes:!!
// A text input!!!!
// A button with the text of “Click Me!”
// A paragraph that has a counter that starts at 0
// - When they input text in the text field and submit it, 
// the text input should reset. At the same time the counter should increment based on the word length.
// - The counter will continue to increment based on word length and will never reset back to zero. 
// So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.


//do spaces count as word length? Yes!


//controlled form
//text area input onChange handler
//button onSubmit
//counter 

import React, { useState } from "react";

function Test() {

    const[counter, setCounter] = useState(0)
    const[word, setWord] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        //change word to word length here
        const length = word.length
        setCounter(counter + length)
        setWord('')
        
    }

    function handleChange(e) {
        setWord(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="type here..." 
            onChange={handleChange}
            value={word}
            />
            <button>Click Me!</button>
            <p>{counter}</p>
        </form>
    )
}

export default Test;