import '@splidejs/splide/dist/css/splide.min.css';
import React, { useEffect, useState } from 'react';
import './skills.css'
import { useInView } from 'react-intersection-observer';
import SkillCard from './skillCard/SkillCard';
import { skills } from './skillList'

interface SkillsProps {
  
}

const Skills: React.FC<SkillsProps> = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if(inView) {
      setIsVisible(true)
    }
  }, [inView])

  const skillCards = skills.map(skill => {
    return(
      <SkillCard key={skill.id} skillName={skill.skillName} skillImg={skill.skillImg} color={skill.color}/>
    )
  })

  return (
    <div ref={ref} className={`skills ${isVisible? 'section_no_offset': 'section_offset'}`}>
      <div className={`skills-content ${isVisible? 'content_visible': 'content_hidden'}`}>
        <div className='skills-title'>
          <p className='skills-header'>SKILLS</p>
          <div className='line'></div>
        </div>
        <div className='skills-explanation'>
          <p>I've been doing web development for about 2 years now, and I'm always eager to learn more. Here are the some technologies I've worked with.</p>
        </div>
        <div className='skills-cards-wrapper'>
          <div className='skills-cards'>
            {skillCards}
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Skills;