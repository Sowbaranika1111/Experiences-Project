import React,{useContext} from 'react'
import './ExpDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ExperiencesVideo from '../ExperiencesVideo/ExperiencesVideo'

const ExpDisplay = ({category}) => {
// getting the exp videos list array using context API
    const {exp_videos_list} = useContext(StoreContext)

  return (
    <div className='exp-display' id='exp-display'>
      <h2>Latest Experiences</h2>
      <div className="exp-display-list">
        {exp_videos_list.map((item,index) => {
          // a component will be returned ,that will take the exp data and it will display it in a card
          // so a component named ExperiencesVideo is created
          // after creating Experiences Video , mount that component here and passed the key,id,name,etc using props
          return <ExperiencesVideo key={index} id={item._id} name={item.name} profession={item.profession} category={item.category} description={item.description} video={item.video} />
        })}
      </div>
    </div>
  )
}

export default ExpDisplay
