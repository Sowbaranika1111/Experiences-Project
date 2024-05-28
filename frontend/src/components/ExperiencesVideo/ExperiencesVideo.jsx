// // Here we get the video , description ,id, etc as a props from the ExpDisplay component

import React from 'react';
import './ExperiencesVideo.css';

const ExperiencesVideo = ({ id, name, profession, category, description, video }) => {
    return (
        <div className='exp-video'>
            <div className="exp-video-container">
                <video className='exp-video-display' controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="exp-video-info">
                <p className='exp-video-prsn-name'><i>{name} ~ {profession}</i></p>
                <div className="exp-video-desc">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ExperiencesVideo;
