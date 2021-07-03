import { Icon, InlineIcon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/brandico/linkedin';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import arrowUpAlt2 from '@iconify-icons/dashicons/arrow-up-alt2';
import heartSolid from '@iconify-icons/clarity/heart-solid';
import { useState } from 'react';

const Footer = () => {
    const [upArrowIsHovered, setUpArrowIsHovered] = useState(false)

    return(
        <div id="prueba" className="footerContainer">
            <div className="contentContainer">
                <a href="#home_container" onMouseOver={()=>setUpArrowIsHovered(true)} onMouseLeave={()=>setUpArrowIsHovered(false)}>
                    <Icon icon={arrowUpAlt2} className={upArrowIsHovered ? "upArrow-icon-active" : "upArrow-icon-inactive"} />
                </a>
                <div className="footerIcons-container">
                    <a href="https://www.linkedin.com/in/mateo-lorenzo-4518121b5/" target="_blank" rel="noreferrer">
                        <Icon icon={linkedinIcon} className="linkedin-icon" />
                    </a>
                    <a href="https://github.com/MatuMto" target="_blank" rel="noreferrer">
                        <Icon icon={githubFill} className="github-icon" />
                    </a>
                </div>
                <div className="footerText">© 2021 - Developed with <Icon icon={heartSolid} className="heart-icon" /> by Mateo Lorenzo</div>
            </div>
        </div>
    )
}

export default Footer