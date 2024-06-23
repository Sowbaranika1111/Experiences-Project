// // Here we get the video , description ,id, etc as a props from the ExpDisplay component

import React, { useContext, useState, useEffect } from 'react';
import './ExperiencesVideo.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const ExperiencesVideo = ({ id, name, age, profession, country, meditating_experience, exp_category, exp_desc, video }) => {

    const { url, favVideos, addToFav, removeFromFav } = useContext(StoreContext)


    // Add to fav
    const [fav, setToFav] = useState(false)

    useEffect(() => {
        setToFav(!!favVideos[id]);
    }, [favVideos, id]);

    const handleFavClick = () => {
        if (fav) {
            removeFromFav(id);
        } else {
            addToFav(id);
        }
    }

    return (
        <div className='exp-video'>
            <div className="exp-video-container">
                <video className='exp-video-display' controls>
                    {/* <source src={url+"/videos/"+video} type={video.type || 'video/webm'} /> */}
                    <source src={url + "/videos/" + video} type={"video/mp4" || 'video/webm'} />
                    Your browser does not support the video tag.
                </video>
                {!fav
                    ? <img className='add-to-fav' onClick={handleFavClick} src={assets.fav_icon_on_videos} alt="Add to fav" />
                    : <div className="fav-added">
                        <img className='remove-from-fav' onClick={handleFavClick} src={assets.fav_icon} alt="Remove from fav" />
                    </div>
                }
            </div>
            <div className="exp-video-info">

                <p className='exp-video-prsn-name'><i>{name} ~ {profession}</i></p>

                <div className="exp-video-desc">
                    <p>{exp_desc}</p>
                </div>

                <hr />

                <div className="user-details">
                    <p>{country} | Meditating for {meditating_experience} | </p>
                </div>

            </div>
        </div>
    );
}

export default ExperiencesVideo;
