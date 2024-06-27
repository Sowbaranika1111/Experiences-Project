import React, { useState } from 'react';
import './WriteExperience.css';

const WriteExperience = () => {
    const [experience, setExperience] = useState('');
    const [savedExperiences, setSavedExperiences] = useState([]);
    const [showSaved, setShowSaved] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    const saveExperience = () => {
        if (experience.trim()) {
            if (editingId) {
                // Update existing experience
                setSavedExperiences(savedExperiences.map(exp => 
                    exp.id === editingId ? { ...exp, text: experience } : exp
                ));
                setEditingId(null);
            } else {
                // Add new experience
                const newExperience = {
                    id: Date.now(),
                    text: experience,
                    date: new Date().toLocaleDateString()
                };
                setSavedExperiences([...savedExperiences, newExperience]);
            }
            setExperience('');
            setShowSaved(true);
        }
    };

    const startEditing = (id, text) => {
        setEditingId(id);
        setExperience(text);
    };

    return (
        <div className="write-experience">
            <h2>Note Down Your Everyday Experiences And Watch The Progress</h2>
            <div className="experience-input">
                <textarea
                    value={experience}
                    onChange={handleExperienceChange}
                    placeholder="How was your conscious breath journey today?"
                />
                <button className='save' onClick={saveExperience}>
                    {editingId ? 'Update' : 'Save'}
                </button>
            </div>

            {showSaved && (
                <div className="saved-experiences">
                    <h3>Your Saved Experiences</h3>
                    {savedExperiences.map((exp) => (
                        <div key={exp.id} className="experience-entry">
                            <p>{exp.text}</p>
                            <small>{exp.date}</small>
                            <button 
                                className="update" 
                                onClick={() => startEditing(exp.id, exp.text)}
                            >
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default WriteExperience;