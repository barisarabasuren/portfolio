import React from "react";
import './projectCard.css'

interface ProjectCardProps {
    projectName: string,
    projectImg: string,
    color: string,
    projectContent: string,
    projectTechnologies: string[],
    githubLink: string,
    deployLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, projectImg, color, projectContent, projectTechnologies, githubLink, deployLink }) => {

    const renderProjectTechnologies = projectTechnologies.map(technology => {
        return(
            <p key={technology} className="project-text technologies-text"> {technology} </p>
        )
    })

    return(
        <div className={`project-card ${color}`}>
            <div id='project-circle' className="project-circle">
                <div className="project-overlay"></div>
                <div className="project-white-bg"></div>
                <img className='img' src={projectImg} alt={projectName}/>
            </div>
            <div className="content-wrapper">
                <p className="project-text project-title">{projectName}</p>
                <p className="project-text project-content">{projectContent}</p>
                <div className="separator"></div>
            </div>
            <div className="project-footer">
                    <div className="technologies">
                        {renderProjectTechnologies}
                    </div>
                    <div className="project-links">
                        <a target="_blank" rel="noopener noreferrer" href={githubLink} className="project-link">
                            <img alt={githubLink} src="https://img.icons8.com/material-outlined/100/000000/github.png"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={deployLink} className="project-link">
                            <img alt= {deployLink} src="https://img.icons8.com/ios/100/000000/domain.png"/>
                        </a>
                    </div>
                </div>
        </div>        
    )
}

export default ProjectCard;