import React, { useContext } from 'react'
import './ExpDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ExperiencesVideo from '../ExperiencesVideo/ExperiencesVideo'

const ExpDisplay = ({ exp_category }) => {
  // getting the exp videos list array using context API
  const { exp_videos_list } = useContext(StoreContext)

  return (
    <div className='exp-display' id='exp-display'>
      <h2>Latest Experiences</h2>
      <div className="exp-display-list">
        {exp_videos_list.map((item, index) => {
          // Writing functionality for displaying videos as per the exp_category
          if (exp_category === "All" || exp_category === item.exp_category) {
            // a component will be returned ,that will take the exp data and it will display it in a card
            // so a component named ExperiencesVideo is created
            // after creating Experiences Video , mount that component here and pass the key,id,name,etc using props
            return <ExperiencesVideo
              key={index}
              id={item._id}
              name={item.name}
              age = {item.age}
              profession={item.profession}
              country={item.country}
              meditating_experience={item.meditating_experience}
              exp_category={item.exp_category}
              exp_desc={item.exp_desc}
              video={item.video} />
          }
        })}
      </div>
    </div>
  )
}

export default ExpDisplay
