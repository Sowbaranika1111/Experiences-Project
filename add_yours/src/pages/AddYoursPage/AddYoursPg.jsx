import React from 'react';
import './AddYoursPg.css';
import '../../index.css'; // Ensure this line is added to include the global styles
import { assets } from '../../assets/assets';

const AddYoursPg = () => {
    return (
        <div className='add'>
            <form className='flex-col'>
                <div className="form-section vdo-upload-section">
                    <p>Video<span>*</span></p>
                    <div className="vdo-upload">
                        <label htmlFor="video">
                            <img src={assets.uploadVideo} alt="Upload Video" />
                        </label>
                        <p>or</p>
                        <label htmlFor="video">
                            <img src={assets.recordVideo} alt="Record Video" />
                        </label>
                        <input type="file" id="video" hidden required />
                    </div>
                </div>

                <div className="form-section">
                    <p>Name<span>*</span></p>
                    <input type="text" name='name' placeholder='Enter Your Name' />
                </div>

                <div className="form-section">
                    <p>Profession<span>*</span></p>
                    <input type="text" name='prfsn' placeholder='Enter Your Profession' />
                </div>

                <div className="form-section">
                    <p>Experience's Category<span>*</span></p>
                    <select name="category">
                        <option value="Mental Health">Mental Health</option>
                        <option value="Physical Health">Physical Health</option>
                        <option value="Manifestations">Manifestations</option>
                        <option value="Miracles">Miracles</option>
                        <option value="Healing">Healing</option>
                        <option value="Visions">Visions</option>
                        <option value="Messages received">Messages received</option>
                        <option value="Astral Travel">Astral Travel</option>
                        <option value="Other Experiences">Other Experiences</option>
                    </select>
                </div>

                <div className="form-section">
                    <p>Experience's Description<span>*</span></p>
                    <textarea name="description" rows="6" placeholder='Few lines about your experience...' required></textarea>
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