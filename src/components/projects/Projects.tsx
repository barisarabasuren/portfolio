import React, { useEffect, useState } from 'react';
import './projects.css';
import { useInView } from 'react-intersection-observer';
import { projects } from './ProjectList'
import ProjectCard from './projectCard/ProjectCard'

interface ProjectsProps {
  
}

const Projects: React.FC<ProjectsProps> = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if(inView) {
      setIsVisible(true)
    }
  }, [inView])

  const projectCards = projects.map(project => {
    return(
      <ProjectCard 
        key={project.id} 
        projectName={project.projectName} 
        projectImg={project.projectImg} 
        color={project.color} 
        projectContent={project.projectContent} 
        projectTechnologies={project.technologies}
        githubLink={project.githubLink}
        deployLink={project.deployLink}
      />
    )
  })

  return (
    <div ref={ref} className={`projects ${isVisible? 'section_no_offset': 'section_offset'}`}>
      <div className={`projects-content ${isVisible? 'content_visible': 'content_hidden'}`}>
        <div className='skills-title'>
          <p className='skills-header'>PROJECTS</p>
          <div className='line'></div>
        </div>
        <div className='project-explanation'>
          <p>Some of the things I've built (More Coming Soon)</p>
        </div>
        <div className='project-cards-wrapper'>
          <div className='projects-cards'>
            {projectCards}
          </div> 
        </div>
      </div>  
    </div>
  );
}

export default Projects;