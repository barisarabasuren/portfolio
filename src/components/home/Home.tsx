import React from 'react';
import './home.css'

interface HomeProps {
  offsetY: number
}

const Home: React.FC<HomeProps> = ({ offsetY }) => {  
  return (
    <div className='home'>
      <svg 
        style={{ transform: `translateX(-${offsetY * 2}px)` }}
        xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="white" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
      </svg>
      <div className='hey'>
        <h1>
            Hi! I am Umut.
        </h1>
        <p>
            Sofware Engineering student specialized in <br></br> Web Development
        </p>
      </div>
      <svg
        style={{ transform: `translateX(${offsetY * 2}px)` }}
        xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="white" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
      </svg>
    </div>
  );
}

export default Home;