import React from "react";

function Home() {
    return(
        <div>
            <h1 className="subSectionTitle">Home Section</h1>
            <h2 className="textBox">The West Taghkanic Diner (WTD) stands as originally constructed, with the same mission as nearly 65 years ago...<br /> To this day, it continues to provide a gathering spot for hungry passerby and long time residents alike.</h2>
            <br />
            <img className='dinerPhotos'src={require ('../dinerPics/diner2.jpg')} alt="diner" />
            <img className='dinerPhotos'src={require ('../dinerPics/diner3.jpg')} alt="diner" />
            <img className='dinerPhotos'src={require ('../dinerPics/diner4.jpg')} alt="diner" />
        </div>
    )
}

export default Home