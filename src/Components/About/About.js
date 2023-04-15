import React, { useState } from "react";

function About() {

    const [displayInfo, setDisplayInfo] = useState('')

    const aboutInformation = [
        { date: 1953, info: 'The West Taghkanic Diner opened its doors in 1953 as one of four Taghkanic Diners, all built to serve travelers along the Taconic Parkway. With a large neon sign out front and retro exterior, the diner quickly became an institution and remained one as the decades passed. '},
        { date: 2018, info: "Soda pop and tuna fish were the story of the space until 2018, when the restaurant was purchased by a chef named Kris Schram. Born in Claverack, Kris spent a portion of his career working in both California and in Copenhagen." },
        { date: 2019, info: "Upon coming back to Columbia County and acquiring WTD, Kris used the space as an opportunity to explore seasonal, ingredient-focused food that sought to be as accessible as any diner in the country. A heightened focus on agricultural producers, local purveyors, and small business owners has separated WTD, earning it praise and national recognition" },
        { date: 2023, info: "Our menu is built upon classic diner staples, reimagined using all that the Hudson Valley has to offer. From produce and grains, to dairy and meat, we’re working with nearby farms to source flavorful, local ingredients. Our pantry is stocked with products that we believe in, many of which are created right here in our community. Our meats will be house smoked, all thanks to the 9ft hot smoker parked right outside the diner." },
        {date: '...and beyond!', info: "We’re excited to be here and can’t wait to share the spirit of the diner - good vibes, great coffee, and stellar eats." }
    ]

    const aboutRenderList = aboutInformation.map(about => {
        return (
            <div key={about.date}>
                <h2 
                style={{display: 'inline-block', fontStyle: 'italic' }}
                name={about.date}
                onClick = {() => handleClick(about)}
                >
                    {about.date}
                </h2>
                <br />
                {displayInfo === about.date ? 
                <li className="aboutInfo">{about.info}</li> 
                : null}
            </div>
        )
    })

    function handleClick(about) {
        setDisplayInfo(about.date)
    }


    return (
        <div>
            <h1 className="subSectionTitle">About Section</h1>
            <br />
            {aboutRenderList}
            <br />
            <iframe className="aboutImage" title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11837.74756962173!2d-73.7173729!3d42.1195294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd9ba86b1bda47%3A0xda77ae7251255f82!2sWest%20Taghkanic%20Diner!5e0!3m2!1sen!2sus!4v1680817898096!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <img className='aboutImage'src={require ('../dinerPics/dinerIcon.jpeg')} alt="diner"/>
            <br />
        </div>
    )
}


export default About;