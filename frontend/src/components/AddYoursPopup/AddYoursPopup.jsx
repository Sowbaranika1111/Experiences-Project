// import React from 'react'
// import './AddYoursPopup.css'
// import { cross_icon_loginPopup } from '../../assets/assets'

// const AddYoursPopup = ({setAddYours}) => {
//   return (
//     <div className='add-yours-popup'>
//       <form className='add-yours-popup-container'>
//         <div className="add-yours-popup-title">
//             <h2>Tell Your Tale</h2>
//             <img onClick={()=>setAddYours(false)} src={cross_icon_loginPopup.cross_icon} alt="" />
//         </div>
//         <div className="add-yours-popup-inputs">
//             <input type="text" placeholder='Your Name' />
//             <input type="text" placeholder='Profession' />
//             <input type="radio"  />
//             <input type="textarea" placeholder='Describe your experience in words'/>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default AddYoursPopup


import React, { useState } from 'react';
import './AddYoursPopup.css';
import { cross_icon_loginPopup } from '../../assets/assets';

const categories = [
    'Mental Health',
    'Physical Health',
    'Manifestations',
    'Miracles',
    'Healing',
    'Visions',
    'Messages received',
    'Astral Travel',
    'Other Experiences',
];

const AddYoursPopup = ({ setAddYours }) => {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [description, setDescription] = useState('');
    const [recordedVideo, setRecordedVideo] = useState(null);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleVideoRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            const chunks = [];

            mediaRecorder.addEventListener('dataavailable', (e) => {
                chunks.push(e.data);
            });

            mediaRecorder.addEventListener('stop', () => {
                const videoBlob = new Blob(chunks, { type: 'video/mp4' });
                setRecordedVideo(videoBlob);
            });

            mediaRecorder.start();
            setTimeout(() => {
                mediaRecorder.stop();
            }, 10000); // Stop recording after 10 seconds
        } catch (err) {
            console.error('Error accessing media devices:', err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and upload the recorded video
        // You can access the form data from the state variables
        console.log('Name:', name);
        console.log('Profession:', profession);
        console.log('Category:', selectedCategory);
        console.log('Description:', description);
        console.log('Recorded Video:', recordedVideo);
        // Add your logic to upload the video and other data to the server
    };

    return (
        <div className='add-yours-popup'>
            <form className='add-yours-popup-container' onSubmit={handleSubmit}>
                <div className="add-yours-popup-title">
                    <h2>Tell Your Tale</h2>
                    <img
                        onClick={() => setAddYours(false)}
                        src={cross_icon_loginPopup.cross_icon}
                        alt=""
                    />
                </div>
                <div className="add-yours-popup-inputs">
                    <input
                        type="text"
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Profession'
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        required
                    />
                    <div>
                        <label>Category:</label>
                        {categories.map((category) => (
                            <div key={category}>
                                <input
                                    type="radio"
                                    id={category}
                                    name="category"
                                    value={category}
                                    checked={selectedCategory === category}
                                    onChange={handleCategoryChange}
                                    required
                                />
                                <label htmlFor={category}>{category}</label>
                            </div>
                        ))}
                    </div>
                    <textarea
                        placeholder='Describe your experience in words'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <button type="button" onClick={handleVideoRecording}>
                        Record Video
                    </button>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddYoursPopup;