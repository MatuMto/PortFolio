import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/brandico/linkedin';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';


const Home = () => {
    const [downArrowIsHovered, setDownArrowIsHovered] = useState(false)

    return(
        <div id="Home" className="homeContainer">
            <div className="home-backgroundImage" style={{backgroundImage: `url(https://i.imgur.com/RS097Vt.jpg)`}}></div>
            <div className='home-ContentContainer'>
                <div className="homeTitle-container">
                    <h1 className="homeTitle">Mateo Lorenzo</h1>
                </div>
                <div className="homeText-container">
                    <p className="homeText">I'm a very passionate and motivated Full Stack Developer with a solid MERN Stack and Agile Metodologies management. Always ready to apply what I know and learn about what I dont.</p>
                </div>
                <div className="home-divisorLine"></div>
                <div className="homeIcons-container">
                    <a href="https://www.linkedin.com/in/mateo-lorenzo-4518121b5/" target="_blank" rel="noreferrer">
                        <Icon icon={linkedinIcon} className="linkedin-icon"/>
                    </a>
                    <a href="https://github.com/MatuMto" target="_blank" rel="noreferrer">
                        <Icon icon={githubFill} className="github-icon"/>
                    </a>
                </div>
            </div>
            <a href="#aboutMe_Container" className="downArrow-container">
                <Icon icon={arrowDownAlt2} className={downArrowIsHovered ? "downArrow-active" : "downArrow-inactive"} onMouseOver={()=>setDownArrowIsHovered(true)} onMouseLeave={()=>setDownArrowIsHovered(false)}/>
            </a>
        </div>
    )
}

export default Home