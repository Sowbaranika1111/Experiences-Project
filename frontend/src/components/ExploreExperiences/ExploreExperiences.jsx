import React from 'react'
import './ExploreExperiences.css'
import { experiences_list } from '../../assets/assets'

const ExploreExperiences = () => {
  return (
    <div className='explore-exp' id='explore-exp'>
      <h1>Explore The Experiences</h1>
      <p className='explore-exp-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tempore esse, vitae nemo assumenda et mollitia tenetur vero fugiat explicabo ipsum repudiandae rem .</p>
      <div className="explore-exp-list">
        {exp_list.map((item,index)=>{
          return (
            <div key={index} className="explore-exp-list-item">
              <img src={item.exp_img} alt="" />
              <p>{item.exp_img}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreExperiences

