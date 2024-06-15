import React, { useEffect, useRef, useState } from 'react';
import './AddYoursPg.css';
import { assets } from '../../assets/assets';

const AddYoursPg = () => {

    // Video Uploading 
    const [video, setVideo] = useState(null)
    const [recording, setRecording] = useState(false)
    const [stream, setStream] = useState(null)
    const videoRef = useRef(null)
    const mediaRecorderRef = useRef(null)
    const chunksRef = useRef([])

    const handleVideoUpload = (e) => {
        setVideo(e.target.files[0]);
    }

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setStream(stream);
            setRecording(true);
        }
        catch (error) {
            console.error('Error accessing media devices: ', error)
            alert('Error accessing camera and/or microphone.Please ensure permissions are granted.')
        }
    };

    useEffect(() => {
        if (recording && stream) {
            videoRef.current.srcObject = stream; // Assigning the MediaStream to the video element
            videoRef.current.style.display = 'block';
            videoRef.current.play();

            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (event) => {
                chunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'video/webm' });
                chunksRef.current = [];
                setVideo(blob);
            };
            mediaRecorderRef.current.start();
        }
    }, [recording, stream]);

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop()
        }
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
        }
        setRecording(false);
        setStream(null);
    };

    // Description words' count
    const [description, setDescriptionLimit] = useState('');
    const maxwords = 111;

    const handleDescriptionLimit = (e) => {
        const words_entered = e.target.value.split(/\s+/);
        if (words_entered.filter(Boolean).length <= maxwords) {
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
                                <source src={URL.createObjectURL(video)} type={video.type || 'video/webm'} />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <>
                                <label htmlFor="uploadVideo">
                                    <img src={assets.uploadVideo} alt="Upload Video" />
                                </label>
                                <p>or</p>
                                <button type="button" onClick={startRecording}>
                                    <img src={assets.recordVideo} alt="Record Video" />
                                </button>
                            </>
                        )}
                        <input onChange={handleVideoUpload} type="file" id="uploadVideo" accept="video/*" hidden required />
                        {recording && (
                            <div>
                                <video ref={videoRef} width="50%" autoPlay playsInline style={{ display: 'block' }} />
                                <button type='button' onClick={stopRecording}>Stop Recording</button>
                            </div>
                        )}
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
