import React, { useState } from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/brandico/linkedin';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';
import bxsDownArrowCircle from '@iconify-icons/bx/bxs-down-arrow-circle';
import chevronDown from '@iconify-icons/mdi-light/chevron-down';


const Home = () => {
    const [buttonIsHovered, setButtonIsHovered] = useState(false) 

    return(
        <div className="homeContainer">
            <div className="home-backgroundImage" style={{backgroundImage: `url(https://i.imgur.com/RS097Vt.jpg)`}}></div>
            <div className='home-ContentContainer'>
                <h1 className="homeTitle">Mateo Lorenzo</h1>
                <div className="homeText-container">
                    <p className="homeText">I'm a very passionate and motivate Christian Full Stack Developer</p>
                    <p className="homeText">with a solid MERN stack and Agile Metodologies management.</p>
                    <p className="homeText">Always ready to apply what I know and learn about what I dont.</p>
                </div>
                <div className="home-divisorLine"></div>
                <div className="homeIcons-container">
                    <a href="https://www.linkedin.com/in/mateo-lorenzo-4518121b5/" target="_blank">
                        <Icon icon={linkedinIcon} className="linkedin-icon" className='homeIcon' />
                    </a>
                    <a href="https://github.com/MatuMto" target="_blank">
                        <Icon icon={githubFill} className="github-icon" className='homeIcon' />
                    </a>
                </div>
            </div>
            <div className="downArrow-container">
                {/* <Icon icon={arrowDownAlt2} className="downArrow"/> */}
                {/* <Icon icon={bxsDownArrowCircle} className="downArrow"/> */}
                <Icon icon={chevronDown} className="downArrow"/>
            </div>
        </div>
    )
}

export default Home