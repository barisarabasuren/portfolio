import React from 'react';

const Resume: React.FC = () => {
    return(
        <div>
            <iframe 
                title='resume'
                src="https://drive.google.com/file/d/1RdFjAVkoslP4sMRvO5BgJz4PDNnsJA4j/preview" 
                width="640" 
                height="480" 
                allow="autoplay"
                style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
            }}
            />
        </div>
    )
}

export default Resume