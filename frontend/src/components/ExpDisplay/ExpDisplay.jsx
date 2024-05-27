import React,{useContext} from 'react'
import './ExpDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const ExpDisplay = ({category}) => {
// getting the exp videos list array using context API
    const {videos_list} = useContext(StoreContext)

  return (
    <div className='exp-display' id='exp-display'>
      <h2>Latest Experiences</h2>
    </div>
  )
}

export default ExpDisplay
