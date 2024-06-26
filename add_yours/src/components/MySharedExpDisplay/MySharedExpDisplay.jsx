import React, { useContext } from 'react'
import './MySharedExpDisplay.css'
import { StoreContext } from '../../context/StoreContext'
// import MyExpItem from '../MyExpItem/MyExpItem'

const MySharedExpDisplay = ({ use_email }) => {
    const { exp_videos_list_1 } = useContext(StoreContext)
    return (
        <div className='exp-item-display' id='exp-item-display'>
            <h2>Latest Experiences</h2>
            {/* <div className="exp-item-display-list">
                {exp_videos_list_1.map((item, index) => {

                    return <MyExpItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        email={item.email}
                        age={item.age}
                        profession={item.profession}
                        country={item.country}
                        meditating_experience={item.meditating_experience}
                        exp_category={item.exp_category}
                        exp_desc={item.exp_desc}
                        video={item.video} />

                })}
            </div>*/}
        </div> 
    )
}

export default MySharedExpDisplay
