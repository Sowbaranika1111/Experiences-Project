import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const [showNotepad, setShowNotepad] = useState(false);
    const [experience, setExperience] = useState('');
    const [savedExperiences, setSavedExperiences] = useState([]);

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    const saveExperience = () => {
        if (experience.trim()) {
            const newExperience = {
                id: Date.now(),
                text: experience,
                date: new Date().toLocaleDateString()
            };
            setSavedExperiences([...savedExperiences, newExperience]);
            setExperience('');
            setShowNotepad(false);
        }
    };

    return (
        <div className="user-profile">
            <div className="container my-experiences">
                <h3>My Experiences</h3>
            </div>
            <div className="container add-yours-pg">
                <h3>Let Your Tale Be An Inspiration!</h3>
            </div>
            <div className="container everyday-exp" onClick={handleExperienceChange}>
                <h3 onClick={() => setShowNotepad(!showNotepad)}>
                    How Was Your Conscious Breath Journey Today?
                </h3>
            </div>
            {showNotepad && (
                <div className="notepad">
                    <textarea
                        value={experience}
                        onChange={handleExperienceChange}
                        placeholder="Write your experience here..."
                    />
                    <button onClick={saveExperience}>Save Experience</button>
                </div>
            )}
            {savedExperiences.length > 0 && (
                <div className="saved-experiences">
                    <h4>Your Saved Experiences</h4>
                    {savedExperiences.map((exp) => (
                        <div key={exp.id} className="experience-entry">
                            <p>{exp.text}</p>
                            <small>{exp.date}</small>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserProfile;

// import React from 'react';
// import './UserProfile.css';

// const UserProfile = () => {
//     return (
//         <div className="user-profile">
//             <div className="container my-experiences">
//                 <h3>My Experiences</h3>
//             </div>
//             <div className="container add-yours-pg">
//                 <h3>Let Your Tale Be An Inspiration!</h3>
//             </div>
//             <div className="container everyday-exp">
//                 <h3>How Was Your Conscious Breath Journey Today?</h3>
//             </div>
//         </div>
//     );
// }

// export default UserProfile;



