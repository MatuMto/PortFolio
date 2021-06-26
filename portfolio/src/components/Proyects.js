import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Icon, InlineIcon } from '@iconify/react';
import fileTypeHtml from '@iconify-icons/vscode-icons/file-type-html';
import fileTypeCss from '@iconify-icons/vscode-icons/file-type-css';
import javascriptIcon from '@iconify-icons/logos/javascript';
import reactIcon from '@iconify-icons/logos/react';
import folderTypeMongodb from '@iconify-icons/vscode-icons/folder-type-mongodb';
import gitIcon from '@iconify-icons/logos/git-icon';
import githubIcon from '@iconify-icons/bi/github';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';

const Proyects = () => {

    const [leftButtonIsHovered, setLeftButtonIsHovered] = useState(false) 
    // const [rightButtonIsHovered, setRightButtonIsHovered] = useState(false)
    const [hoveredButton, setHoveredButton] = useState('')

    const proyects = [
        {
            title: 'MindDeco',
            description: 'Full stack e-commerce where owner can add, modify and delete products and people can buy differents home products.',
            imgs: ['https://i.imgur.com/4txxQ7N.png', 'https://i.imgur.com/Im8IBDf.png', 'https://i.imgur.com/l0os5dR.png', 'https://i.imgur.com/USWgGqK.png', 'https://i.imgur.com/mOq4ako.png', 'https://i.imgur.com/dzpJqMC.png', 'https://i.imgur.com/thCORiL.png', 'https://i.imgur.com/Heq66cH.png', 'https://i.imgur.com/FVi162k.png', 'https://i.imgur.com/iOWxdn1.png'],
            hostLink: "https://minddeco.herokuapp.com/",
            githubLink: 'https://github.com/francescapozzolo/mindDeco'
        },{
            title: 'MindDeco Mobile App',
            description: 'MindDeco mobile application, where user can intuitively make same actions that in web page.',
            imgs: ['https://i.imgur.com/4txxQ7N.png', 'https://i.imgur.com/Im8IBDf.png', 'https://i.imgur.com/l0os5dR.png', 'https://i.imgur.com/USWgGqK.png', 'https://i.imgur.com/mOq4ako.png', 'https://i.imgur.com/dzpJqMC.png', 'https://i.imgur.com/thCORiL.png', 'https://i.imgur.com/Heq66cH.png', 'https://i.imgur.com/FVi162k.png', 'https://i.imgur.com/iOWxdn1.png'],
            githubLink: 'https://github.com/Danielcomes92/mindDeco-native'
        },{
            title: 'Reviewers',
            description: 'Full stack web page where users can read differents reviews and also create and modify or delete those ones created by them.',
            imgs: ['https://i.imgur.com/cr6lACv.png', 'https://i.imgur.com/CkkvKyf.png', 'https://i.imgur.com/mhuhwFr.png', 'https://i.imgur.com/Ymk3C1Z.png', 'https://i.imgur.com/wP2BASM.png', 'https://i.imgur.com/Pnx8JLt.png', 'https://i.imgur.com/VMznhYz.png'],
            hostLink: "https://los-reviewers.herokuapp.com/",
            githubLink: 'https://github.com/JoseZaccaro/ReViewers'
        },{
            title: 'MyTinerary',
            description: 'Web Page where user can create an account and choose itineraries available in the world most touristic cities.',
            imgs: ['https://i.imgur.com/MhfwhWD.png', 'https://i.imgur.com/7D2oyZF.png', 'https://i.imgur.com/Bu5XT48.png', 'https://i.imgur.com/WVCdGTW.png', 'https://i.imgur.com/Z4nF1kS.png'],
            hostLink: "https://mytinerarylorenzo.herokuapp.com/",
            githubLink: 'https://github.com/MatuMto/MyTinerary'
        },{
            title: 'MyTinerary Mobile App',
            description: 'MyTinerary mobile application where user can also register/login and view differents itineraries.',
            imgs: ['https://i.imgur.com/MhfwhWD.png', 'https://i.imgur.com/7D2oyZF.png', 'https://i.imgur.com/Bu5XT48.png', 'https://i.imgur.com/WVCdGTW.png', 'https://i.imgur.com/Z4nF1kS.png'],
            hostLink: "https://mytinerarylorenzo.herokuapp.com/",
            githubLink: 'https://github.com/MatuMto/MyTinerary-mobile'
        }       
    ]
    
    
    
    
    https://github.com/MatuMto/MyTinerary-mobile
    return (
        <div className="proyectsContainer">
            <h3 className="proyectsTitle">PROJECTS</h3>


            {proyects.map((proyect, index) => {
                return(
                <div className="proyectContainer">
                    <div className="carrouselContainer">
                        <Carousel showThumbs={false} className="carrousel" infiniteLoop={true} autoPlay={true} emulateTouch={true}>
                            {proyect.imgs.map(img => <div className="carrusel-image" style={{backgroundImage: `url(${img})`}}></div>)}
                        </Carousel>
                        <div className="projectButton-container">
                            <div onMouseOver={()=> setHoveredButton('proyect' + index)} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                                <div className={hoveredButton === `proyect${index}` ? "projectButton-Active" : "projectButton-Inactive"}></div>
                                <a href={proyect.hostLink} target="_blank" rel="noreferrer" className={hoveredButton === `proyect${index}` ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</a>
                            </div>
                            <div onMouseOver={()=> setHoveredButton(`github${index}`)} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                                <div className={hoveredButton === `github${index}` ? "projectButton-Active" : "projectButton-Inactive"}></div>
                                <a href={proyect.githubLink} target="_blank" rel="noreferrer" className={hoveredButton === `github${index}` ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="proyectDescription-container">
                        <h4 className="proyectTitle">{proyect.title}</h4>
                        <p className="descriptionText-1">{proyect.description}</p>
                        <div className="tecnologiesUsed-container">
                            <p className="tecnologiesUsed-tittle">Tecnologies used:</p>
                            <div className="tecnologiesUsed-subContainer">
                                <div className="tecnology-box marginBottom5">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={fileTypeHtml} fontSize={23} />
                                    </div>
                                </div>
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={fileTypeCss} fontSize={23}/>
                                    </div>
                                </div>
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={javascriptIcon} fontSize={23} />
                                    </div>
                                </div>
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={reactIcon} fontSize={23} />
                                    </div>
                                </div>
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={gitIcon} fontSize={23} />
                                    </div>
                                </div>
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={folderTypeMongodb} fontSize={23} />
                                    </div>
                                </div>
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={nodejsIcon} fontSize={23} />
                                    </div>
                                </div>
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={githubIcon} className="proyects-githubIcon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}

           

        </div>
    )
}

export default Proyects 