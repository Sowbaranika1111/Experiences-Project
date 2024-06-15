import React, { useState } from 'react';
import './AddYoursPg.css';
import { assets } from '../../assets/assets';

const AddYoursPg = () => {

    // If the video is uploaded 
    const [video, setVideo] = useState(false)

    // Description words' count
    const [description,setDescriptionLimit] = useState('');
    const maxwords = 111;

    const handleDescriptionLimit = (e) => {
        const words_entered = e.target.value.split(/\s+/);
        if(words_entered.filter(Boolean).length <= maxwords){
            setDescriptionLimit(e.target.value);
        }
    };

    const word_count = description.split(/\s+/).filter(Boolean).length;
    const words_remaining = maxwords - word_count;

    return (
        <div className='add'>
            <form className='flex-col'>
                <div className="form-section vdo-upload-section">
                    <p>Video<span>*</span></p>
                    <div className="vdo-upload">
                        {video ? (
                            <video width="50%" controls>
                                <source src={URL.createObjectURL(video)} type={video.type} />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <>
                                <label htmlFor="uploadVideo">
                                    <img src={assets.uploadVideo} alt="Upload Video" />
                                </label>
                                <p>or</p>
                                <label htmlFor="recordVideo">
                                    <img src={assets.recordVideo} alt="Record Video" />
                                </label>
                            </>
                        )}
                        <input onChange={(e) => setVideo(e.target.files[0])} type="file" id="uploadVideo" accept="video/*" hidden required />
                    </div>
                </div>

                <div className="form-section">
                    <p>Name<span>*</span></p>
                    <input type="text" name='name' placeholder='Enter Your Name' />
                </div>

                <div className="form-section">
                    <p>Age<span>*</span></p>
                    <select name="age">
                        <option value="Select_age">Select</option>
                        <option value="0_to_10">0-10</option>
                        <option value="11_to_20">11-20</option>
                        <option value="21_to_30">21-30</option>
                        <option value="31_to_50">31-50</option>
                        <option value="51_to_70">51-70</option>
                        <option value="greater_than_70">above 70</option>
                    </select>
                </div>

                <div className="form-section">
                    <p>Profession<span>*</span></p>
                    <input type="text" name='prfsn' placeholder='Enter Your Profession' />
                </div>

                <div className="form-section">
                    <p>Country<span>*</span></p>
                    <input type="text" name='country' placeholder='Enter Your Country Name' />
                </div>

                <div className="form-section">
                    <p>Meditating Experience<span>*</span></p>
                    <input type="text" name="yearsMeditating" placeholder='For how many years you are meditating?' />
                </div>

                <div className="form-section">
                    <p>Experience's Category<span>*</span></p>
                    <select name="category">
                        <option value="Select_category">Select</option>
                        <option value="Mental_Health">Mental Health</option>
                        <option value="Physical_Health">Physical Health</option>
                        <option value="Manifestations">Manifestations</option>
                        <option value="Miracles">Miracles</option>
                        <option value="Healing">Healing</option>
                        <option value="Visions">Visions</option>
                        <option value="Messages_received">Messages received</option>
                        <option value="Astral_Travel">Astral Travel</option>
                        <option value="Other_Experiences">Other Experiences</option>
                    </select>
                </div>

                <div className="form-section">
                    <p>Experience's Description<span>*</span></p>
                    <textarea name="description" onChange={handleDescriptionLimit} rows="6" placeholder='Few lines about your experience...' required></textarea>
                </div>
                <div className="words-count">
                    {words_remaining}/{maxwords}
                </div>

                <div className="button-container">
                    <button type='submit' className='add-btn'>ADD</button>
                </div>
            </form>

        </div>
    )
}

export default AddYoursPg;


// import React from 'react'
// import './AddYoursPg.css'
// import { assets } from '../../assets/assets'

// //flex-col is used in multiple components , so add the css for this cls in index.css

// const AddYoursPg = () => {
//     return (
//         <div className='add'>
//             <form className='flex-col'>

//                 <p>Video<span>*</span></p>
//                 <div className="vdo-upload ">
//                     <label htmlFor="video">
//                         <img src={assets.uploadVideo} alt="" />
//                     </label>
//                     <p>or</p>
//                     <label htmlFor="video">
//                         <img src={assets.recordVideo} alt="" />
//                     </label>
//                     <input type="file" id="video" hidden required />
//                 </div>

//                 <div className="add-participant-name flex-col">
//                     <p>Name<span>*</span></p>
//                     <input type="text" name='name' placeholder='Enter Your Name' />
//                 </div>

//                 <div className="add-participant-prfsn flex-col">
//                     <p>Profession<span>*</span></p>
//                     <input type="text" name='prfsn' placeholder='Enter Your Profession' />
//                 </div>

//                 <div className="add-category">
//                     <p>Experience's Category<span>*</span></p>
//                     <select name="category" >
//                         <option value="Mental Health">Mental Health</option>
//                         <option value="Physical Health">Physical Health</option>
//                         <option value="Manifestations">Manifestations</option>
//                         <option value="Miracles">Miracles</option>
//                         <option value="Healing">Healing</option>
//                         <option value="Visions">Visions</option>
//                         <option value="Messages received">Messages received</option>
//                         <option value="Astral Travel">Astral Travel</option>
//                         <option value="Other Experiences">Other Experiences</option>
//                     </select>
//                 </div>

//                 <div className="add-exp-description flex-col">
//                     <p>Experience's Description<span>*</span></p>
//                     <textarea name="description" rows="6" placeholder='Few lines about your experience...' required></textarea>
//                 </div>

//                 <button type='submit' className='add-btn'>ADD</button>

//             </form>
//         </div>
//     )
// }

// export default AddYoursPg
