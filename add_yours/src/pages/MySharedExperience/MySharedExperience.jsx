import React from 'react'
import './MySharedExperience.css'
const MySharedExperience = () => {
  return (
    <div>
      
    </div>
  )
}

export default MySharedExperience



// import React, { useEffect, useState } from 'react'
// import './MySharedExperience.css'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const MySharedExperience = () => {

//   const url = "http://localhost:4000"
//   const [mySharedExp, setMySharedExp] = useState([]);

//   const fetchList = async () => {

//     const response = await axios.get(`${url}/api/experiences/list`)
//     // console.log(response.data);
//     if (response.data.success) {
//       setMySharedExp(response.data.data)
//     }
//     else {
//       toast.error("Error")
//       console.log(error)
//     }
//   }

//   //Whenever the page is load , the abv func will be executed once
//   useEffect(() => {
//     fetchList();
//   }, [])

//   return (
//     <div className='my-shared-experience'>
//       <h2>My Shared Experiences</h2>

//       <div className='experience-grid'>
//         {mySharedExp.map((item, index) => (
//           <div key={index} className='experience-container'>
//             <div className='video-section'>
//               <video className='exp-video-display' controls>
//                 <source src={`${url}/videos/${item.video}`} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <div className='info-section'>
//               <h3>{item.name}</h3>
//               <div className='info-grid'>
//                 <p><strong>Age:</strong> {item.age}</p>
//                 <p><strong>Profession:</strong> {item.profession}</p>
//                 <p><strong>Country:</strong> {item.country}</p>
//                 <p><strong>Experience:</strong> {item.meditating_experience}</p>
//                 <p><strong>Category:</strong> {item.exp_category}</p>
//               </div>
//               <div className='description'>
//                 <p><strong>Description:</strong> {item.exp_desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default MySharedExperience
