import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Proyects = () => {

    const [leftButtonIsHovered, setLeftButtonIsHovered] = useState(false) 
    // const [rightButtonIsHovered, setRightButtonIsHovered] = useState(false)
    const [hoveredButton, setHoveredButton] = useState('')

    const proyects = [
        {
            title: '',
            description: '',
            imgs: [],
            tecnologies: ''
        },{
            title: '',
            description: '',
            imgs: [],
            tecnologies: ''
        },
        {
            title: '',
            description: '',
            imgs: [],
            tecnologies: ''
        }
    ]

    return (
        <div className="proyectsContainer">
            <h3 className="proyectsTitle">PROJECTS</h3>

            <div className="proyectContainer">
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
                <div className="proyectDescription-container">
                    <h4 className="proyectTitle">MindDeco</h4>
                    <p className="descriptionText-1">Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images.</p>
                    <p className="descriptionText-2">Full-stack web application that allows users to and comment, and update users images. Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images.</p>
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
            </div>

            <div className="proyectContainer">
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
                <div className="proyectDescription-container">
                    <h4 className="proyectTitle">MindDeco Mobile</h4>
                    <p className="descriptionText-1">Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images.</p>
                    <p className="descriptionText-2">Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images. Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images.</p>
                    <div className="projectButton-container">
                        <div onMouseOver={()=> setHoveredButton('project2')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'project2' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <p className={hoveredButton === 'project2' ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</p>
                        </div>
                        <div onMouseOver={()=> setHoveredButton('github2')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'github2' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://github.com/Danielcomes92/mindDeco-native" target="_blank" rel="noreferrer" className={hoveredButton === 'github2' ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="proyectContainer">
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
                <div className="proyectDescription-container">
                    <h4 className="proyectTitle">Reviewers</h4>
                    <p className="descriptionText-1">Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images.</p>
                    <p className="descriptionText-2">Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images. Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images.</p>
                    <div className="projectButton-container">
                        <div onMouseOver={()=> setHoveredButton('project3')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'project3' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://los-reviewers.herokuapp.com/" target="_blank" rel="noreferrer" className={hoveredButton === 'project3' ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</a>
                        </div>
                        <div onMouseOver={()=> setHoveredButton('github3')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'github3' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://github.com/JoseZaccaro/ReViewers" target="_blank" rel="noreferrer" className={hoveredButton === 'github3' ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="proyectContainer">
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
                <div className="proyectDescription-container">
                    <h4 className="proyectTitle">MyTinerary</h4>
                    <p className="descriptionText-1">Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images.</p>
                    <p className="descriptionText-2">Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images. Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images.</p>
                    <div className="projectButton-container">
                        <div onMouseOver={()=> setHoveredButton('project4')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'project4' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://mytinerarylorenzo.herokuapp.com/" target="_blank" rel="noreferrer" className={hoveredButton === 'project4' ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</a>
                        </div>
                        <div onMouseOver={()=> setHoveredButton('github4')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'github4' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://github.com/MatuMto/mytinerary-Lorenzo" target="_blank" rel="noreferrer" className={hoveredButton === 'github4' ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="proyectContainer">
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
                <div className="proyectDescription-container">
                    <h4 className="proyectTitle">MyTinerary Mobile</h4>
                    <p className="descriptionText-1">Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images.</p>
                    <p className="descriptionText-2">Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images. Full-stack web application that allows users to add, edit, delete a post, and comment, and update users images.</p>
                    <div className="projectButton-container">
                        <div onMouseOver={()=> setHoveredButton('project5')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'project5' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <p className={hoveredButton === 'project5' ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</p>
                        </div>
                        <div onMouseOver={()=> setHoveredButton('github5')} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                            <div className={hoveredButton === 'github5' ? "projectButton-Active" : "projectButton-Inactive"}></div>
                            <a href="https://github.com/MatuMto/MyTinerary-mobile" target="_blank" rel="noreferrer" className={hoveredButton === 'github5' ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Proyects 