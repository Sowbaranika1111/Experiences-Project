import React, { useContext } from 'react'
import './MySharedExpDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const MySharedExpDisplay = ({category}) => {
    const {exp_videos_list} = useContext(StoreContext)
  return (
    <div className='my-shared-videos-display' id='my-shared-videos-display'>
      <h2>My Experiences</h2>
      <p>hi</p>
    </div>
  )
}

export default MySharedExpDisplay
