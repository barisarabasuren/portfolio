import React from 'react';
import './background.css';
import Particles from "react-tsparticles";


const Background: React.FC = () => {
  return (
    <div>
        <div className='particles-bg'>

        </div>
        <Particles
            className='particles'
            id="tsparticles"
            options={{
                interactivity: {
                events: {
                    onClick: { enable: false, mode: "push" },
                    onHover: {
                    enable: false,
                    mode: "repulse",
                    parallax: { enable: false, force: 60, smooth: 10 }
                    },
                    resize: true
                },
                modes: {
                    push: { quantity: 10 },
                    repulse: { distance: 100, duration: 0.4 }
                }
                },
                fullScreen: {
                    enable:true,
                    zIndex:-1
                },
                particles: {
                color: { value: "#ffffff" },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                    enable: true,
                    area: 800
                    },
                    value: 40
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: { min: 2, max: 5 }
                }
                }
            }}
        />
    </div>
    
  );
}

export default Background;