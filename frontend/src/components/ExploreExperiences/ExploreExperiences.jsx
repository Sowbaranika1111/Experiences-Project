import React from 'react';
import './ExploreExperiences.css';
import { experiences_list, addYoursVideo } from '../../assets/assets';

const ExploreExperiences = ({ category, setCategory , setAddYours}) => {
  const handleAddYoursVideoClick = () => {
    setAddYours(true);
  };
  return (
    <div className='explore-exp' id='explore-exp'>
      <div className="explore-exp-header">
        <h1>Explore The Experiences</h1>
        <video className='tell-your-tale-video' onClick={handleAddYoursVideoClick} src={addYoursVideo.AddYours_video} autoPlay loop muted width="300">
          Your browser does not support the video tag.
        </video>
      </div>
      <p className='explore-exp-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tempore esse, vitae nemo assumenda et mollitia tenetur vero fugiat explicabo ipsum repudiandae rem.</p>
      <div className="explore-exp-list">
        {experiences_list.map((item, index) => {
          return (
            // writing onClick func and passing setCategory function
            <div onClick={() => setCategory(prev => prev === item.exp_name ? "All" : item.exp_name)} key={index} className="explore-exp-list-item">
              {/* if we click on 1st exp ,an active cls name is added to it,then if we click on other exps that cls name will be moved to the one which is clicked */}
              <img className={category === item.exp_name ? "active" : ""} src={item.exp_img} alt="" />
              <p>{item.exp_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreExperiences

