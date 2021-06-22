import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const AboutMe = () => {

    const [buttonIsHovered, setButtonIsHovered] = useState(false)

    return (
        <div className="aboutMe-container">
            <div className="aboutMe-content-container">
                <p className="aboutMe-title">ABOUT ME</p>
                <div className="imageAndText-container">
                    <div className="personalImage-container">
                        <div className="personalImage" style={{backgroundImage: `url('https://i.imgur.com/jkeMqKJ.jpg')`}}></div>
                        <div onMouseOver={()=> setButtonIsHovered(true)} onMouseLeave={() => setButtonIsHovered(false)} className="curriculumButton">
                            <div className={buttonIsHovered ? "cvButton-active" : "cvButton-inactive"}></div>
                            <a href="https://drive.google.com/file/d/1VoqKfZjTKZRLue3tNQ6VONwDSy-pUVDz/view?usp=sharing" target="_blank" rel="noreferrer" className={buttonIsHovered ? "cvButtonText-active" : "cvButtonText-inactive"}>View Resume</a>
                        </div>
                    </div>
                    <div className="aboutMe-text-container">
                        {/* <p className="aboutMe-title">ABOUT ME</p> */} 
                        {/* <p className="aboutMe-description">I am a cybersecurity graduate from City College of San Francisco. However, I have experienced with software development through self-taught. Throughout my educational career, I worked at Laney college as a python tutor. Also, I volunteered at City College of San Francisco as a web developer tutor HTML, CSS, and JavaScript. Moreover, I got an internship at the San Francisco Living Wage Coalition, a non-profit organization. My role in the organization was in both the back end and front end. I used technologies such as Java, NodeJS, Express, JavaScript, MySQL, React and React Native. Now, I am fully focused on Software Development.</p> */}
                        {/* <p className="aboutMe-description">I am a nineteen argentinian full stack software developer. My career in the IT world began two years ago by taking two udemy courses, wich taught me HTML, CSS and Javascript, but they also showed me how cool and fun programming could be. So I entered Mindhub's intensive Bootcamp, where i surrounded myself with people who shared my passion and really cool teachers, but above all, i learned a very lot of awesome things! Those were very intensive days... Mondays to Fridays we had 9am to 18pm classes, and used the rest of the day to continue coding, practicing what we learned and working in proyects. But they were totally worth, since in 4 months I could perform really cool proyects, using agile metodologies and the tecnologies wich conform the MERN stack (MongoDB, Express, React, Node.js) in addition to other very cool stuff. I consider this to be the best decision I could have made. This bootcamp taught me much more than I imagined, both on a technical and personal level. This is why today I feel very confident about my abilities and more than ready to continue developing great projects. </p> */}
                        <p className="aboutMe-description">I am a nineteen argentinian full stack software developer. My career in the IT world began two years ago by taking courses where i learned HTML, CSS and JS bases. After that I entered Mindhub's intensive Bootcamp, where i learned a very lot of awesome things! Those were really hard days... Mondays to Fridays we had 9am to 18pm classes, and used the rest of the day to continue coding, practicing what we learned and working in proyects. But they were totally worth, since in 4 months I could perform really cool proyects, using agile metodologies and the tecnologies wich conform the MERN stack (MongoDB, Express, React, Node.js) in addition to other very cool stuff. This bootcamp taught me much more than I imagined, both on a technical and personal level. This is why today I feel very confident about my abilities and more than ready to continue developing great projects. </p>
                    </div>
                </div> 
                {/* reorganizar estooo
                
                
                
                */}
                {/* <NavLink to="www.google.com"> */}
                    {/* <div onMouseOver={()=> setButtonIsHovered(true)} onMouseLeave={() => setButtonIsHovered(false)} className="curriculumButton">
                        <div className={buttonIsHovered ? "cvButton-active" : "cvButton-inactive"}></div>
                        <a href="https://drive.google.com/file/d/1VoqKfZjTKZRLue3tNQ6VONwDSy-pUVDz/view?usp=sharing" target="_blank" rel="noreferrer" className={buttonIsHovered ? "cvButtonText-active" : "cvButtonText-inactive"}>View Resume</a>
                    </div> */}
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