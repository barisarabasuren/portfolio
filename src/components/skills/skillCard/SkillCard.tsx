import React from "react";
import './skillCard.css';

interface SkillCardProps {
    skillName: string,
    skillImg: string,
    color: string,
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, skillImg, color }) => {
    return(
        <div className={`skill-card ${color}`}>
            <div id='circle' className="circle circle-greyscale">
                <div className="overlay"></div>
                <div className="white-bg"></div>
                <img className='img' src={skillImg} alt={skillName}/>
            </div>
            <p>{skillName}</p>
        </div>
    )
}

export default SkillCard;