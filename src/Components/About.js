import React from "react";

function About() {
    return (
        <div>
            <ul>
            The West Taghkanic Diner opened its doors in 1953 as one of four Taghkanic Diners, all built to serve travelers along the Taconic Parkway. With a large neon sign out front and retro exterior, the diner quickly became an institution and remained one as the decades passed. 
            </ul>
            <ul>
            Soda pop and tuna fish were the story of the space until 2018, when the restaurant was purchased by a chef named Kris Schram. Born in Claverack, Kris spent a portion of his career working in both California and in Copenhagen. 

Upon coming back to Columbia County and acquiring WTD, Kris used the space as an opportunity to explore seasonal, ingredient-focused food that sought to be as accessible as any diner in the country. A heightened focus on agricultural producers, local purveyors, and small business owners has separated WTD, earning it praise and national recognition
            </ul>
            <ul>
            Our menu is built upon classic diner staples, reimagined using all that the Hudson Valley has to offer. From produce and grains, to dairy and meat, we’re working with nearby farms to source flavorful, local ingredients. Our pantry is stocked with products that we believe in, many of which are created right here in our community. Our meats will be house smoked, all thanks to the 9ft hot smoker parked right outside the diner.

We’re excited to be here and can’t wait to share the spirit of the diner - good vibes, great coffee, and stellar eats. 
            </ul>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11837.74756962173!2d-73.7173729!3d42.1195294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd9ba86b1bda47%3A0xda77ae7251255f82!2sWest%20Taghkanic%20Diner!5e0!3m2!1sen!2sus!4v1680817898096!5m2!1sen!2sus" width={"600" }height={"400"} style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <img className='dinerIcon'src={require ('./dinerPics/dinerIcon.jpeg')} alt="diner" width={"600" }height={"400"}  />
            <br />
            <a id="link" href='https://www.wtdinerny.com/'>Link to the actual West Taghkanic Diner</a>
        </div>
    )
}


export default About;