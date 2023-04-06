import React from "react";

function Feedback( {type} ) {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="container">
            <form className="submitNewFood" onSubmit={handleSubmit}>
                {type === 'meal' ? 
                <h2>Do you have a meal that you would want to recommend?</h2> :
                <h2>Do you have a drink that you would want to recommend?</h2>}
                <input
                    type='text'
                    name='name'
                    placeholder="Name..."
                />
                <br />
                <input
                    type='text'
                    name='ingrediants'
                    placeholder="Ingrediants..."
                />
                <br />
                <input
                    type='text'
                    name='price'
                    placeholder="Price..."
                />
                <br />
                <input
                    type='text'
                    name='image'
                    placeholder="Image URL..."
                />
                <br />
                <button>Submit</button>    
            </form>
        </div>
    )
}

export default Feedback;