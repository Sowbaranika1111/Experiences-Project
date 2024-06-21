// // Here we get the video , description ,id, etc as a props from the ExpDisplay component

import React, { useContext } from 'react';
import './ExperiencesVideo.css';
import { StoreContext } from '../../context/StoreContext';

const ExperiencesVideo = ({ id, name, age, profession, country, meditating_experience, exp_category, exp_desc, video }) => {

    const { url } = useContext(StoreContext)

    return (
        <div className='exp-video'>
            <div className="exp-video-container">
                <video className='exp-video-display' controls>
                    {/* <source src={url+"/videos/"+video} type={video.type || 'video/webm'} /> */}
                    <source src={url + "/videos/" + video} type={"video/mp4" || 'video/webm'} />

                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="exp-video-info">
                <p className='exp-video-prsn-name'><i>{name} ~ {profession}</i></p>
                <div className="exp-video-desc">
                    <p>{exp_desc}</p>
                </div>
                <div className="user-details">
                    <p>{country} | Meditating for {meditating_experience} | </p>
                </div>
            </div>
        </div>
    );
}

export default ExperiencesVideo;
