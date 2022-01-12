import React, { useEffect, useState } from 'react';
import './about.css'
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if(inView) {
      setIsVisible(true)
    }
  }, [inView])

  const handleTextSpans = () => {
    const text = 'Umut Baris Arabasuren - Software Engineering Student - ';

    const textSpans = text.split('').map(
      (char: string, i: number) => 
        <span key={i} style={{ transform: `rotate(${i * 360 / text.length}deg)` }} >{char}</span>
    )

    return textSpans 
  }

  return (
    <div ref={ref} className={`about ${isVisible? 'section_no_offset': 'section_offset'}`} >
      <div className={`about-content ${isVisible? 'content_visible': 'content_hidden'}`}>
        <div className='skills-title'>
          <p className='skills-header'>ABOUT</p>
          <div className='line'></div>
        </div>
        <div className='about-inner-wrapper'>
          <div className='about-circle-wrapper'>
            <div className='about-circle'>
              <div className='logo'></div>
              <div className='text'>
                <p>
                  {handleTextSpans()}
                </p>
              </div>
            </div>
          </div>
          
          <div className='about-text-wrapper'>
            <p>Hey! My name is Umut. I'm a web developer with a passion for front end development and design. I'm currently a second year student at <span>CODE University of Applied Sciences</span> pursuing a degree in <span>software engineering</span>. With the help of my <span>architecture</span> background, I approach to my studies with an extended focus on interaction design as well.</p>
            <Link to='./resume' target='_blank' rel="noopener noreferrer">
              <button className='resume-button'>Check my Resume</button>
            </Link>
            
          </div>
        </div>
      </div> 
    </div>
  );
}

export default About;