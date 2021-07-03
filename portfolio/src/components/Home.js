import React, { useState } from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/brandico/linkedin';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';
import bxsDownArrowCircle from '@iconify-icons/bx/bxs-down-arrow-circle';
import chevronDown from '@iconify-icons/mdi-light/chevron-down';


const Home = () => {
    const [buttonIsHovered, setButtonIsHovered] = useState(false) 
    const [downArrowIsHovered, setDownArrowIsHovered] = useState(false)

    return(
        <div id="home_container" className="homeContainer">
            <div className="home-backgroundImage" style={{backgroundImage: `url(https://i.imgur.com/RS097Vt.jpg)`}}></div>
            <div className='home-ContentContainer'>
                <div className="homeTitle-container">
                    <h1 className="homeTitle">Mateo Lorenzo</h1>
                </div>
                <div className="homeText-container">
                    <p className="homeText">I'm a very passionate and motivate Christian Full Stack Developer with a solid Mern Stack and Agile Metodologies management. Always ready to apply what I know and learn about what I dont.</p>
                    {/* <p className="homeText">I'm a very passionate and motivated Christian Full Stack Developer</p>
                    <p className="homeText">with a solid MERN stack and Agile Metodologies management.</p>
                    <p className="homeText">Always ready to apply what I know and learn about what I dont.</p> */}
                </div>
                <div className="home-divisorLine"></div>
                <div className="homeIcons-container">
                    <a href="https://www.linkedin.com/in/mateo-lorenzo-4518121b5/"  target="_blank">
                        <Icon icon={linkedinIcon} className="linkedin-icon" className='homeIcon' />
                    </a>
                    <a href="https://github.com/MatuMto" target="_blank">
                        <Icon icon={githubFill} className="github-icon" className='homeIcon' />
                    </a>
                </div>
            </div>
            {/* <div className="downArrow-container"> */}
            <a href="#aboutMe_Container" className="downArrow-container">
                <Icon icon={arrowDownAlt2} className={downArrowIsHovered ? "downArrow-active" : "downArrow-inactive"} onMouseOver={()=>setDownArrowIsHovered(true)} onMouseLeave={()=>setDownArrowIsHovered(false)}/>
                {/* <Icon icon={bxsDownArrowCircle} className="downArrow"/> */}
                {/* <Icon icon={chevronDown} className="downArrow"/> */}
            </a>
            {/* </div> */}
        </div>
    )
}

export default Home