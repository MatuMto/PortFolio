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

    // const proyects = [
    //     {
    //         title: '',
    //         description: '',
    //         imgs: [],
    //         tecnologies: ''
    //     },{
    //         title: '',
    //         description: '',
    //         imgs: [],
    //         tecnologies: ''
    //     },
    //     {
    //         title: '',
    //         description: '',
    //         imgs: [],
    //         tecnologies: ''
    //     }
    // ]

// MindDeco mobile application, where user can intuitively make same actions that in web page.
// Full stack web page where users can read differents reviews and also create and modify or delete those ones created by them.
// Web Page where user can create an account and choose itineraries available in the world most touristic cities.
// MyTinerary mobile application where user can also register/login and view differents itineraries.
    return (
        <div className="proyectsContainer">
            <h3 className="proyectsTitle">PROJECTS</h3>

            <div className="proyectContainer">
                <div className="carrouselContainer">
                    <Carousel showThumbs={false} className="carrousel" infiniteLoop={true} autoPlay={true} emulateTouch={true}>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/MhfwhWD.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/7D2oyZF.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/Bu5XT48.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/WVCdGTW.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/Z4nF1kS.png')`}}> </div>
                        </div>
                    </Carousel>
                    <div className="projectButton-container">
                        <div onMouseOver={()=> setHoveredButton('proyect1')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'proyect1' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://minddeco.herokuapp.com/" target="_blank" rel="noreferrer" className={hoveredButton === 'proyect1' ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</a>
                        </div>
                        <div onMouseOver={()=> setHoveredButton('github1')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'github1' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://github.com/francescapozzolo/mindDeco" target="_blank" rel="noreferrer" className={hoveredButton === 'github1' ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                        </div>
                    </div>
                </div>
                <div className="proyectDescription-container">
                    <h4 className="proyectTitle">MindDeco</h4>
                    <p className="descriptionText-1">Full stack e-commerce where owner can add, modify and delete products and people can buy differents home products.</p>
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

            <div className="proyectContainer">
                <div className="carrouselContainer">
                    <Carousel showThumbs={false} className="carrousel" infiniteLoop={true} autoPlay={true} emulateTouch={true}>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/MhfwhWD.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/7D2oyZF.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/Bu5XT48.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/WVCdGTW.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/Z4nF1kS.png')`}}> </div>
                        </div>
                    </Carousel>
                    <div className="projectButton-container">
                        <div onMouseOver={()=> setHoveredButton('proyect2')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'proyect2' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://minddeco.herokuapp.com/" target="_blank" rel="noreferrer" className={hoveredButton === 'proyect2' ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</a>
                        </div>
                        <div onMouseOver={()=> setHoveredButton('github2')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'github2' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://github.com/francescapozzolo/mindDeco" target="_blank" rel="noreferrer" className={hoveredButton === 'github2' ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                        </div>
                    </div>
                </div>
                <div className="proyectDescription-container">
                    <h4 className="proyectTitle">MindDeco</h4>
                    <p className="descriptionText-1">Full stack e-commerce where owner can add, modify and delete products and people can buy differents home products.</p>
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

            <div className="proyectContainer">
                <div className="carrouselContainer">
                    <Carousel showThumbs={false} className="carrousel" infiniteLoop={true} autoPlay={true} emulateTouch={true}>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/MhfwhWD.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/7D2oyZF.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/Bu5XT48.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/WVCdGTW.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/Z4nF1kS.png')`}}> </div>
                        </div>
                    </Carousel>
                    <div className="projectButton-container">
                        <div onMouseOver={()=> setHoveredButton('proyect3')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'proyect3' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://minddeco.herokuapp.com/" target="_blank" rel="noreferrer" className={hoveredButton === 'proyect3' ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</a>
                        </div>
                        <div onMouseOver={()=> setHoveredButton('github3')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'github3' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://github.com/francescapozzolo/mindDeco" target="_blank" rel="noreferrer" className={hoveredButton === 'github3' ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                        </div>
                    </div>
                </div>
                <div className="proyectDescription-container">
                    <h4 className="proyectTitle">MindDeco</h4>
                    <p className="descriptionText-1">Full stack e-commerce where owner can add, modify and delete products and people can buy differents home products.</p>
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

            <div className="proyectContainer">
                <div className="carrouselContainer">
                    <Carousel showThumbs={false} className="carrousel" infiniteLoop={true} autoPlay={true} emulateTouch={true}>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/MhfwhWD.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/7D2oyZF.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/Bu5XT48.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/WVCdGTW.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/Z4nF1kS.png')`}}> </div>
                        </div>
                    </Carousel>
                    <div className="projectButton-container">
                        <div onMouseOver={()=> setHoveredButton('proyect4')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'proyect4' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://minddeco.herokuapp.com/" target="_blank" rel="noreferrer" className={hoveredButton === 'proyect4' ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</a>
                        </div>
                        <div onMouseOver={()=> setHoveredButton('github4')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'github4' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://github.com/francescapozzolo/mindDeco" target="_blank" rel="noreferrer" className={hoveredButton === 'github4' ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                        </div>
                    </div>
                </div>
                <div className="proyectDescription-container">
                    <h4 className="proyectTitle">MindDeco</h4>
                    <p className="descriptionText-1">Full stack e-commerce where owner can add, modify and delete products and people can buy differents home products.</p>
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

            <div className="proyectContainer">
                <div className="carrouselContainer">
                    <Carousel showThumbs={false} className="carrousel" infiniteLoop={true} autoPlay={true} emulateTouch={true}>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/MhfwhWD.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/7D2oyZF.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/Bu5XT48.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/WVCdGTW.png')`}}> </div>
                        </div>
                        <div>
                            <div className="carrusel-image" style={{backgroundImage: `url('https://i.imgur.com/Z4nF1kS.png')`}}> </div>
                        </div>
                    </Carousel>
                    <div className="projectButton-container">
                        <div onMouseOver={()=> setHoveredButton('proyect5')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'proyect5' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://minddeco.herokuapp.com/" target="_blank" rel="noreferrer" className={hoveredButton === 'proyect5' ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</a>
                        </div>
                        <div onMouseOver={()=> setHoveredButton('github5')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'github5' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://github.com/francescapozzolo/mindDeco" target="_blank" rel="noreferrer" className={hoveredButton === 'github5' ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                        </div>
                    </div>
                </div>
                <div className="proyectDescription-container">
                    <h4 className="proyectTitle">MindDeco</h4>
                    <p className="descriptionText-1">Full stack e-commerce where owner can add, modify and delete products and people can buy differents home products.</p>
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

        </div>
    )
}

export default Proyects 