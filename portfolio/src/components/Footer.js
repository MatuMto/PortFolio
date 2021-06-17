import { Icon, InlineIcon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/brandico/linkedin';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import arrowUpAlt2 from '@iconify-icons/dashicons/arrow-up-alt2';
import heartSolid from '@iconify-icons/clarity/heart-solid';

const Footer = () => {
    return(
        <div className="footerContainer">
            <div className="contentContainer">
                <Icon icon={arrowUpAlt2} className="upArrow-icon" />
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