import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import fileTypeHtml from '@iconify-icons/vscode-icons/file-type-html';
import fileTypeCss from '@iconify-icons/vscode-icons/file-type-css';
import javascriptIcon from '@iconify-icons/logos/javascript';
import reactIcon from '@iconify-icons/logos/react';
import folderTypeMongodb from '@iconify-icons/vscode-icons/folder-type-mongodb';
import gitIcon from '@iconify-icons/logos/git-icon';

import githubIcon from '@iconify-icons/bi/github';


import nodejsIcon from '@iconify-icons/logos/nodejs-icon';



const Skills = () => {
    return(
        <div className="skillsSection-Container">
            <h4 className="skillsTitle">SKILLS</h4>
            <div className="skillsContainer">
                <div className="skillBox">
                    <div className="iconExample" style={{backgroundImage: `url('https://img.icons8.com/color/452/html-5--v1.png')`}}>
                        <Icon icon={fileTypeHtml} fontSize={35} />
                    </div>
                    <p className="tecnology">HTML</p>
                </div>
                <div className="skillBox">
                    <div className="iconExample">
                        <Icon icon={fileTypeCss} fontSize={35}/>
                    </div>
                    <p className="tecnology">CSS</p>
                </div>
                <div className="skillBox">
                    <div className="iconExample">
                        <Icon icon={javascriptIcon} fontSize={35} />
                    </div>
                    <p className="tecnology">Javacript</p>
                </div>
                <div className="skillBox">
                    <div className="iconExample">
                        <Icon icon={reactIcon} fontSize={35} />
                    </div>
                    <p className="tecnology">React</p>
                </div>
                <div className="skillBox">
                    <div className="iconExample">
                        <Icon icon={reactIcon} fontSize={35} />
                    </div>
                    <p className="tecnology">React Native</p>
                </div>
                <div className="skillBox">
                    <div className="iconExample">
                        <Icon icon={gitIcon} fontSize={35} />
                    </div>
                    <p className="tecnology">Git</p>
                </div>
                <div className="skillBox">
                    <div className="iconExample">
                        <Icon icon={folderTypeMongodb} fontSize={35} />
                    </div>
                    <p className="tecnology">MongoDB</p>
                </div>
                <div className="skillBox">
                    <div className=""></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="iconExample">
                        <Icon icon={nodejsIcon} fontSize={35} />
                    </div>
                    <p className="tecnology">NodeJS and Express</p>
                </div>
                <div className="skillBox">
                    <div className="iconExample">
                        <Icon icon={githubIcon} className="githubIcon"/>
                    </div>
                    <p className="tecnology">Github</p>
                </div>
            </div>
            <div className='blackDivisorLine'></div>
        </div>
    )
}

export default Skills