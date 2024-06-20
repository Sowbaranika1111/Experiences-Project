import React, { useEffect, useRef, useState } from 'react';
import './AddYoursPg.css';
import { assets } from '../../assets/assets';
import axios from "axios"

const AddYoursPg = () => {

    const url = "http://localhost:4000";

    const [data, setData] = useState({
        name: "",
        age: "Select",
        profession: "",
        country: "",
        meditating_experience: "",
        exp_category: "Select",
        exp_desc: ""
    })
    const [description, setDescriptionLimit] = useState('');
    const maxwords = 111;

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value

        // Description words' count
        if (name === 'exp_desc') {
            const words_entered = value.split(/\s+/);
            if (words_entered.filter(Boolean).length <= maxwords) {
                setDescriptionLimit(value);
                setData(data => ({ ...data, [name]: value }))
            }
        }
        else {
            setData(data => ({ ...data, [name]: value }))
        }
    }
    // Description words' count
    const word_count = description.split(/\s+/).filter(Boolean).length;
    const words_remaining = maxwords - word_count;

    // to check if the data is getting updated
    // useEffect(()=>{
    //     console.log(data);
    // },[data]) //give the state name here, whenevr it is updated the above conditions will work [console.log(data)]

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

    const [errors, setErrors] = useState({
        age: false,
        exp_category: false,
        video: false
    });

    // to make an API call
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // Validation
        const newErrors = {
            age: data.age === 'Select',
            exp_category: data.exp_category === 'Select',
            video: !video
        }
        setErrors(newErrors);

        if (!newErrors.age && !newErrors.exp_category && !newErrors.video) {
            // alert("Form submitted")
            console.log("Form submitted", data);
        }

        //Inserting all the form data in a form data
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("video", video)
        formData.append("age", data.age)
        formData.append("profession", data.profession)
        formData.append("country", data.country)
        formData.append("meditating_experience", data.meditating_experience)
        formData.append("exp_category", data.exp_category)
        formData.append("exp_desc", data.exp_desc)

        // we use axios to call the api 
        // AddYoursPg is created using Post mthd so use the same mthd for axios also
        // this is the end point to upload the prdt
        // form data will be added in the db, the videos will be stored in the backend folder
        const response = await axios.post(`${url}/api/experiences/add`, formData);
        if (response.data.success) {
            setData({
                name: "",
                age: "Select",
                profession: "",
                country: "",
                meditating_experience: "",
                exp_category: "Select",
                exp_desc: ""
            })
            setVideo(false)
        } else {

        }
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>

                <div className="form-section">
                    <p>Name<span>*</span></p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Enter Your Name' required />
                </div>

                <div className={`form-section ${errors.age ? 'error' : ''}`}>
                    <p>Age<span>*</span></p>
                    <select onChange={onChangeHandler} name="age" required>
                        <option value="Select">Select</option>
                        <option value="0_to_10">0-10</option>
                        <option value="11_to_20">11-20</option>
                        <option value="21_to_30">21-30</option>
                        <option value="31_to_50">31-50</option>
                        <option value="51_to_70">51-70</option>
                        <option value="greater_than_70">above 70</option>
                    </select>
                    {errors.age && <span className='error-message'>Please select an age range.</span>}
                </div>

                <div className="form-section">
                    <p>Profession<span>*</span></p>
                    <input onChange={onChangeHandler} value={data.profession} type="text" name='profession' placeholder='Enter Your Profession' required />
                </div>

                <div className="form-section">
                    <p>Country<span>*</span></p>
                    <input onChange={onChangeHandler} value={data.country} type="text" name='country' placeholder='Enter Your Country Name' required />
                </div>

                <div className="form-section">
                    <p>Meditating Experience<span>*</span></p>
                    <input onChange={onChangeHandler} value={data.meditating_experience} type="text" name="meditating_experience" placeholder='Eg: 2.3 years or 6 months' required />
                </div>

                <div className={`form-section ${errors.exp_category ? 'error' : ''}`}>
                    <p>Experience's Category<span>*</span></p>
                    <select onChange={onChangeHandler} name="exp_category" required>
                        <option value="Select_category">Select</option>
                        <option value="Mental_Health">Mental Health</option>
                        <option value="Physical_Health">Physical Health</option>
                        <option value="Manifestations">Manifestations</option>
                        <option value="Miracles">Miracles</option>
                        <option value="Healing">Healing</option>
                        <option value="Visions">Visions</option>
                        <option value="Messages_Received">Messages received</option>
                        <option value="Astral_Travel">Astral Travel</option>
                        <option value="Other_Experiences">Other Experiences</option>
                    </select>
                    {errors.exp_category && <span className='error-message'>Please select a category.</span>}
                </div>

                <div className="form-section vdo-upload-section">
                    <p>Video<span>*</span></p>
                    <div className="vdo-upload">
                        {video ? (
                            <video width="50%" controls>
                                <source src={URL.createObjectURL(video)} type={video.type || 'video/webm'} />
                                {/* <source src={`/uploads/${video}`} type="video/webm" /> */}
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <>
                                <div className="vdo-input-options">
                                    <label htmlFor="uploadVideo">
                                        <img src={assets.uploadVideo} alt="Upload Video" />
                                    </label>
                                    <p>or</p>
                                    <button type="button" onClick={startRecording}>
                                        <img src={assets.recordVideo} alt="Record Video" />
                                    </button>
                                </div>
                            </>
                        )}
                        <input onChange={handleVideoUpload} type="file" id="uploadVideo" accept="video/*" hidden />
                        {recording && (
                            <div>
                                <video ref={videoRef} width="50%" autoPlay playsInline style={{ display: 'block' }} />
                                <button type='button' onClick={stopRecording}>Stop Recording</button>
                            </div>
                        )}
                        {errors.video && <span className=''>Please upload or record a video.</span>}
                    </div>
                </div>

                <div className="form-section">
                    <div className="description-header">
                        <p>Experience's Description<span>*</span></p>
                        <div className="words-count">
                            {words_remaining}/{maxwords}
                        </div>
                    </div>
                    <textarea onChange={onChangeHandler} value={data.exp_desc} name="exp_desc" rows="6" placeholder='Few lines about your experience...' required></textarea>
                </div>

                <div className="button-container">
                    <button type='submit' className='add-btn'>ADD</button>
                </div>
            </form>
        </div>
    )
}

export default AddYoursPg;
