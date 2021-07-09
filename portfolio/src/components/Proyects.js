import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Icon } from '@iconify/react';
import fileTypeHtml from '@iconify-icons/vscode-icons/file-type-html';
import fileTypeCss from '@iconify-icons/vscode-icons/file-type-css';
import javascriptIcon from '@iconify-icons/logos/javascript';
import reactIcon from '@iconify-icons/logos/react';
import folderTypeMongodb from '@iconify-icons/vscode-icons/folder-type-mongodb';
import gitIcon from '@iconify-icons/logos/git-icon';
import githubIcon from '@iconify-icons/bi/github';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Proyects = () => {
    const [hoveredButton, setHoveredButton] = useState('')
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openedMobileProyect, setOpenedMobileProyect] = useState('')

    const proyects = [
        {
            title: 'MindDeco',
            description: 'Full Stack Interior Design e-commerce where owner can add, modify and delete products and people can create an account, search and filter between differents products and also save them and buy.',
            imgs: ['https://i.imgur.com/4txxQ7N.png', 'https://i.imgur.com/Im8IBDf.png', 'https://i.imgur.com/l0os5dR.png', 'https://i.imgur.com/USWgGqK.png', 'https://i.imgur.com/mOq4ako.png', 'https://i.imgur.com/dzpJqMC.png', 'https://i.imgur.com/thCORiL.png', 'https://i.imgur.com/Heq66cH.png', 'https://i.imgur.com/FVi162k.png', 'https://i.imgur.com/iOWxdn1.png'],
            hostLink: "https://minddeco.herokuapp.com/",
            githubLink: 'https://github.com/francescapozzolo/mindDeco',
            youtubeLink: '#',
            tecnologiesUsed:"html, css, js, react, git, github, mongo, node"
        },{
            title: 'MindDeco Mobile App',
            description: 'MindDeco Mobile Aplication based on React Native where, as in web, people can register and login, and also search and buy different awesome Interior Design Products.',
            imgs: ['https://i.imgur.com/3PhufSi.png', 'https://i.imgur.com/tqsuWeL.png', 'https://i.imgur.com/5g1Pcp2.png', 'https://i.imgur.com/hJhNqdF.png', 'https://i.imgur.com/mxpJH18.png', 'https://i.imgur.com/DdgrxWE.png'],
            hostLink: "#",
            githubLink: 'https://github.com/Danielcomes92/mindDeco-native',
            youtubeLink: 'https://www.youtube.com/watch?v=xatEQLrf5cw',
            tecnologiesUsed:"html, css, js, reactNative, git, github, mongo, node"
        },{
            title: 'Reviewers',
            description: 'Full stack web page where users can read and save differents reviews, create an account and also can create, modify and delete those reviews created by them.',
            imgs: ['https://i.imgur.com/cr6lACv.png', 'https://i.imgur.com/CkkvKyf.png', 'https://i.imgur.com/mhuhwFr.png', 'https://i.imgur.com/Ymk3C1Z.png', 'https://i.imgur.com/wP2BASM.png', 'https://i.imgur.com/Pnx8JLt.png', 'https://i.imgur.com/VMznhYz.png'],
            hostLink: "https://los-reviewers.herokuapp.com/",
            githubLink: 'https://github.com/JoseZaccaro/ReViewers',
            youtubeLink: '#',
            tecnologiesUsed:"html, css, js, react, git, github, mongo, node"
        },{
            title: 'MyTinerary',
            description: 'Full Stack travel web page where user can create an account and navigate trough differents itineraries available in the world most touristic cities interacting dynamically with each one.',
            imgs: ['https://i.imgur.com/Xv5CVuZ.png', 'https://i.imgur.com/AnnfSYy.png', 'https://i.imgur.com/EWwFMTL.png', 'https://i.imgur.com/7qq0W9S.png', 'https://i.imgur.com/dgU9Ztk.png', 'https://i.imgur.com/Baujpww.png', 'https://i.imgur.com/GQxdSq1.png', 'https://i.imgur.com/dvUl1C6.png', 'https://i.imgur.com/NbA6qoW.png', 'https://i.imgur.com/A0kVnZU.png'],
            hostLink: "https://mytinerary-lorenzo.herokuapp.com/",
            githubLink: 'https://github.com/MatuMto/MyTinerary',
            youtubeLink: '#',
            tecnologiesUsed:"html, css, js, react, git, github, mongo, node"
        },{
            title: 'MyTinerary Mobile App',
            description: 'MyTinerary Mobile Application  where user can create an account and navigate trough differents itineraries available in the world most touristic cities.',
            imgs: ['https://i.imgur.com/6r0LfjW.png', 'https://i.imgur.com/vbpV3md.png', 'https://i.imgur.com/VRTJ8ya.png', 'https://i.imgur.com/AK61RdC.png', 'https://i.imgur.com/2SEJdRT.png'],
            hostLink: "#",
            githubLink: 'https://github.com/MatuMto/MyTinerary-mobile',
            youtubeLink: 'https://www.youtube.com/watch?v=Keln7ty8xC0',
            tecnologiesUsed:"html, css, js, reactNative, git, github, mongo, node"
        }       
    ]
    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    const viewMobileProyect = (proyectOpened) => {
        handleOpen()
        setOpenedMobileProyect(proyectOpened)
    }

    const indetifyIfTecnologyIsUsed = (tecnology, icon)=>{
         
    }


    return (
        <div className="proyectsContainer">
            <h3 className="proyectsTitle">PROJECTS</h3>

            {proyects.map((proyect, index) => {
                return(
                <div id={index} className="proyectContainer">
                    <div className="carrouselContainer">
                        <Carousel showThumbs={false} className="carrousel" infiniteLoop={true} autoPlay={true} emulateTouch={true}>
                            {proyect.imgs.map(img => proyect.hostLink !== '#' ?
                                 <a href={proyect.hostLink} target="_blank" rel="noreferrer"><div className="carrusel-image" style={{backgroundImage: `url(${img})`}}></div></a>
                                 : <div onClick={()=>viewMobileProyect(proyect.youtubeLink)} className="carrusel-image" style={{backgroundImage: `url(${img})`}}></div>
                            )}
                        </Carousel>
                        <div className="projectButton-container">
                            <div onMouseOver={()=> setHoveredButton('proyect' + index)}  onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                                <div className={hoveredButton === `proyect${index}` ? "projectButton-Active" : "projectButton-Inactive"}></div>
                                {proyect.hostLink !== "#" ?
                                    <a href={proyect.hostLink} target="_blank" rel="noreferrer" className={hoveredButton === `proyect${index}` ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</a>
                                    :
                                    <p onClick={()=>viewMobileProyect(proyect.youtubeLink)} className={hoveredButton === `proyect${index}` ? "projectButtonText-active" : "projectButtonText-inactive"}>See Project</p>
                                }
                                <div>
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className={classes.modal}
                                        open={open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                    >
                                        <Fade in={open}>
                                            <div className="modalContent-container">
                                                <ReactPlayer
                                                    url={openedMobileProyect}
                                                    className='react-player'
                                                    playing
                                                    width='100%'
                                                    height='100%'
                                                    controls={true}
                                                />
                                            </div>
                                        </Fade>
                                    </Modal>
                                </div>
                            </div>
                            <div onMouseOver={()=> setHoveredButton(`github${index}`)} onMouseLeave={() => setHoveredButton('noOne')} className="projectButton">
                                <div className={hoveredButton === `github${index}` ? "projectButton-Active" : "projectButton-Inactive"}></div>
                                <a href={proyect.githubLink} target="_blank" rel="noreferrer" className={hoveredButton === `github${index}` ? "projectButtonText-active" : "projectButtonText-inactive"}>Open on Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="proyectDescription-container">
                        <div className="proyectDescription-subcontainer">
                            <h4 className="proyectTitle">{proyect.title}</h4>
                            <p className="descriptionText-1">{proyect.description}</p>
                        </div>
                        <div className="tecnologiesUsed-container">
                            <p className="tecnologiesUsed-tittle">Tecnologies used:</p>
                            <div className="tecnologiesUsed-subContainer">
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={fileTypeHtml} fontSize={23} />
                                    </div>
                                </div>
                                <div className="tecnology-box responsive-margin">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={fileTypeCss} className="proyect-tecnologyIcon"/>
                                    </div>
                                </div>
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={javascriptIcon} className="proyect-tecnologyIcon"/>
                                    </div>
                                </div>
                                {proyect.tecnologiesUsed.includes("reactNative")
                                    ?   <div className="tecnology-box">
                                            {/* <div className="proyects-iconContainer"> */}
                                                {/* <Icon icon={reactIcon} className="proyect-tecnologyIcon"/> */}
                                                <div className="react-native-icon" style={{backgroundImage: `url('https://i.imgur.com/IxxFtuC.png')`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: 'no-repeat', width: '40px', height: '40px'}}></div>
                                            {/* </div> */}
                                        </div>
                                    :   <div className="tecnology-box">
                                            <div className="proyects-iconContainer">
                                                <Icon icon={reactIcon} className="proyect-tecnologyIcon"/>
                                            </div>
                                        </div>
                            
                                }
                                <div className="tecnology-box responsive-margin">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={gitIcon} className="proyect-tecnologyIcon" />
                                    </div>
                                </div>
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={githubIcon} className="proyect-tecnologyIcon proyects-githubIcon"/>
                                    </div>

                                </div>
                                <div className="tecnology-box">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={nodejsIcon} className="proyect-tecnologyIcon"/>
                                    </div>
                                </div>
                                <div className="tecnology-box responsive-margin">
                                    <div className="proyects-iconContainer">
                                        <Icon icon={folderTypeMongodb} className="proyect-tecnologyIcon"/>
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