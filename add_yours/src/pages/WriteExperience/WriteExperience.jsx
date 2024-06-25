import React, { useState } from 'react';
import './WriteExperience.css';

const WriteExperience = () => {
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
        }
    };

    return (
        <div className="write-experience">
            <h2>Write Your Conscious Breath Journey</h2>
            <div className="experience-input">
                <textarea
                    value={experience}
                    onChange={handleExperienceChange}
                    placeholder="How was your conscious breath journey today?"
                />
                <button onClick={saveExperience}>Save Experience</button>
            </div>

            <div className="saved-experiences">
                <h3>Your Saved Experiences</h3>
                {savedExperiences.map((exp) => (
                    <div key={exp.id} className="experience-entry">
                        <p>{exp.text}</p>
                        <small>{exp.date}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WriteExperience;