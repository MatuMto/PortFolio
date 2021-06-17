import React, { useState } from 'react'



const Home = () => {
    const [buttonIsHovered, setButtonIsHovered] = useState(false) 

    return(
        <div className="homeContainer">
            <div className="presentationText-container">                
                <p className="presentationText"> Hi! My name is <span className="coloredText">Mateo Lorenzo.</span>  
                    <br/>Im a web and mobile full stack
                    <br/> software developer
                </p>
                <div onMouseOver={()=> setButtonIsHovered(true)} onMouseLeave={() => setButtonIsHovered(false)} className="verMas-button">
                    <div className={buttonIsHovered ? "verMasActivo" : "verMasInactivo"}></div>
                    <p className={buttonIsHovered ? "verMasTextActivo" : "verMasTextInactivo"}>Know more</p>
                </div>
            </div>
        </div>
    )
}

export default Home