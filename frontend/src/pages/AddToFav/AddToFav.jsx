import React, { useContext } from 'react';
import './AddToFav.css';
import { StoreContext } from '../../context/StoreContext';

const AddToFav = () => {

    const {favVideos,exp_videos_list} = useContext(StoreContext)

  return (
    <div>
      <div className="fav">
        <div className="fav-items">
            <div className="video-items-title">
                <p>Videos</p>
                <p>Category</p>
                <p>Name</p>
                <p>Profession</p>
                <p>Country</p>
                <p>Meditating for</p>
                <p>Description</p>
            </div>
            <hr />
            {exp_videos_list.map((item,index)=>{
                if(favVideos[item._id])
                    {
                        return(
                            <div className="video-items-title video-items-item">
                                <video src={item.video}></video>
                                <p>{item.exp_category}</p>
                                <p>{item.name} | {item.profession}</p>
                                <p>{item.exp_desc}</p>
                                <p>{item.country} |Meditating For {item.meditating_experience}</p>
                            </div>
                        )
                    }
            })}
        </div>
      </div>
    </div>
  )
}

export default AddToFav
