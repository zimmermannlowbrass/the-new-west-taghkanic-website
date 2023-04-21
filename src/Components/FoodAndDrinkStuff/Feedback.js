import React, { useState } from "react";

function Feedback( { type, onAddItem} ) {

    const [formData, setFormData] = useState({
        name: '',
        type: type,
        price: '',
        description: '',
        image: '',
        stars: 0
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
        <div className="textBox" style={{width: '700px', height: '160px'}}>
            <form className="submitNewFood" onSubmit={handleSubmit}>
                {type === 'meal' ? 
                <h2>Do you have a meal that you would want to recommend?</h2> :
                <h2>Do you have a drink that you would want to recommend?</h2>}
                <input
                    type='text'
                    name='name'
                    required
                    value = {formData.name}
                    placeholder="Name..."
                    onChange={handleChange}
                />
                <br />
                <input
                    type='text'
                    name='price'
                    required
                    value = {formData.price}
                    placeholder="Price..."
                    onChange={handleChange}
                />
                <br />
                <input
                    type='text'
                    name='image'
                    value = {formData.image}
                    placeholder="Image URL..."
                    onChange={handleChange}
                />
                <br />
                <input
                    type='text'
                    name='description'
                    required
                    value = {formData.description}
                    placeholder="Description..."
                    onChange={handleChange}
                />
                <br />
                <button>Submit</button>    
            </form>
        </div>
    )
}

export default Feedback;