import React, { useState } from "react";

function Feedback( { type, onAddItem} ) {

    const [formData, setFormData] = useState({
        name: '',
        type: type,
        price: '',
        ingredients: [],
        image: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        onAddItem(formData)
    }

    function handleChange(e) {
        const value = e.target.value
        const type = e.target.name
        setFormData({
            ...formData , 
            [type] : value
        })
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
                    onChange={handleChange}
                />
                <br />
                <input
                    type='text'
                    name='ingrediants'
                    placeholder="Ingrediants..."
                    onChange={handleChange}
                />
                <br />
                <input
                    type='text'
                    name='price'
                    placeholder="Price..."
                    onChange={handleChange}
                />
                <br />
                <input
                    type='text'
                    name='image'
                    placeholder="Image URL..."
                    onChange={handleChange}
                />
                <br />
                <button>Submit</button>    
            </form>
        </div>
    )
}

export default Feedback;