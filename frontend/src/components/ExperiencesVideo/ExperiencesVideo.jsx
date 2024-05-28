// Here we get the video , description ,id, etc as a props from the ExpDisplay component

import React from 'react'
import { assets } from '../../assets/assets'
import './ExperiencesVideo.css'

const ExperiencesVideo = ({ id, name, profession, category, description, video }) => {


    return (
        <div className='exp-video'>
            <div className="exp-video-container">
                <img className='exp-video-display' src={video} alt="" />
            </div>
            <div className="exp-video-info">
                <p className='exp-video-prsn-name'><i>{name} ~ {profession}</i></p>
                <div className="exp-video-desc">
                    <p>{description}</p>
                </div>
            </div>


        </div>
    )
}

export default ExperiencesVideo
