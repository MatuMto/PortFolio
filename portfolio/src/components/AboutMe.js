import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const AboutMe = () => {

    const [buttonIsHovered, setButtonIsHovered] = useState(false)

    return (
        <div className="aboutMe-container">
            <div className="aboutMe-content-container">
                <p className="aboutMe-title">ABOUT ME</p>
                <div className="imageAndText-container">
                    <div className="personalImage-container" style={{backgroundImage: `url('https://i.imgur.com/jkeMqKJ.jpg')`}}></div>
                    <div className="aboutMe-text-container">
                        <p className="aboutMe-description">I am a cybersecurity graduate from City College of San Francisco. However, I have experienced with software development through self-taught. Throughout my educational career, I worked at Laney college as a python tutor. Also, I volunteered at City College of San Francisco as a web developer tutor HTML, CSS, and JavaScript. Moreover, I got an internship at the San Francisco Living Wage Coalition, a non-profit organization. My role in the organization was in both the back end and front end. I used technologies such as Java, NodeJS, Express, JavaScript, MySQL, React and React Native. Now, I am fully focused on Software Development.</p>
                    </div>
                </div>
                {/* <NavLink to="www.google.com"> */}
                    <div onMouseOver={()=> setButtonIsHovered(true)} onMouseLeave={() => setButtonIsHovered(false)} className="curriculumButton">
                        <div className={buttonIsHovered ? "cvButton-active" : "cvButton-inactive"}></div>
                        <a href="https://drive.google.com/file/d/1VoqKfZjTKZRLue3tNQ6VONwDSy-pUVDz/view?usp=sharing" target="_blank" rel="noreferrer" className={buttonIsHovered ? "cvButtonText-active" : "cvButtonText-inactive"}>View Resume</a>
                    </div>
                {/* </NavLink> */}
                {/* <div className="curriculumButton">
                    <div></div>
                    <p className="verCV-text">See Resume</p>
                </div> */}
            </div>
        </div>
    )
}

export default AboutMe