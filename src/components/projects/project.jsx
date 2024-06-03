import React from 'react'
import './project.css'
import project1 from './project-1.webp'
import project2 from './project-2.webp'
import project3 from './project-3.webp'
import { useState } from 'react'

function Project() {
    const [imageShown, setImageShown] = useState([project2])
    const [clicked, setClicked] = useState('f7f6f7')
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = (e) => {
        setImageShown(e);
        setSelectedProject(e);
        setClicked('f7f6f7')        
    }
    return (
        <div>
            <div className="project">
                <div className="project-tagline">OUR PROJECT</div>
                <div className="project-heading">WHY WE ARE BEST</div>
                <div className="project-container">
                    <div className="project-container-left">
                        <div className="project-container-left-container">
                            <img src={imageShown} alt="" srcset="" style={{height:"100%"}}/>
                        </div>
                    </div>
                    <div className="project-container-right">
                        <div className="projectList1" onClick={() => handleClick(project1)} style={{backgroundColor: selectedProject === project1 ? '#fe3146' : '#f7f6f7'}}>
                            <div className="item-heading">Genderless Kei - Japan's Hot</div>
                            <div className="item-content">Set to launch on the manufacturer's new A330neo aircraft in 2017, it offering lots of</div>
                        </div>
                        <div className="projectList2" onClick={() => handleClick(project2)} style={{backgroundColor: selectedProject === project2 ? '#fe3146' : '#f7f6f7'}}>
                            <div className="item-heading">Better Strategy & Quality</div>
                            <div className="item-content">Set to launch on the manufacturer's new A330neo aircraft in 2017, it offering lots of</div>
                        </div>
                        <div className="projectList3" onClick={() => handleClick(project3)} style={{backgroundColor: selectedProject === project3 ? '#fe3146' : '#f7f6f7'}}>
                            <div className="item-heading">Genderless Kei - Japan's Hot</div>
                            <div className="item-content">Set to launch on the manufacturer's new A330neo aircraft in 2017, it offering lots of</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
