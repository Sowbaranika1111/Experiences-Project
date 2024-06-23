import React, { useContext } from 'react';
import './AddToFav.css';
import { StoreContext } from '../../context/StoreContext';

const AddToFav = () => {
  const { url, favVideos, exp_videos_list, removeFromFav } = useContext(StoreContext);

  return (
    <div className='container'>
      {exp_videos_list.map((item, index) => {
        if (favVideos[item._id]) {
          return (
            <div className='exp-video' key={item._id}>
              <div className="exp-video-container">
                <div className="video-header">
                  <p className="exp-category">{item.exp_category}</p>
                  <b onClick={() => removeFromFav(item._id)}>X</b>
                </div>
                <video className='exp-video-display' controls>
                  <source src={url + "/videos/" + item.video} type={"video/mp4" || 'video/webm'} />
                  Your browser does not support the video tag.
                </video>
                <div className="exp-video-info">
                  <p className='exp-video-prsn-name'>{item.name} | {item.profession}</p>
                  <div className="exp-video-desc">
                    <p>{item.exp_desc}</p>
                  </div>
                  <hr />
                  <div className="user-details">
                    <p>{item.country} | Meditating For {item.meditating_experience}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default AddToFav;


// import React, { useContext } from 'react';
// import './AddToFav.css';
// import { StoreContext } from '../../context/StoreContext';

// const AddToFav = () => {

//   const { url, favVideos, exp_videos_list, removeFromFav } = useContext(StoreContext)

//   return (
//     <div>

//       {exp_videos_list.map((item, index) => {
//         if (favVideos[item._id]) {
//           return (
//             <div className='exp-video'>
//               <div className="exp-video-container">
//                 <div key={item._id} className="exp-video-display">

//                   <p className="exp-category">{item.exp_category}</p>
//                   <b onClick={() => removeFromFav(item._id)}>X</b>


//                   <video className='exp-video-display' controls>
//                     <source src={url + "/videos/" + item.video} type={"video/mp4" || 'video/webm'} />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//                 <div className="exp-video-info">
//                   <p className='exp-video-prsn-name'>{item.name} | {item.profession}</p>

//                   <div className="exp-video-desc">
//                     <p>{item.exp_desc}</p>
//                   </div>

//                   <div className="user-details">
//                     <p>{item.country} |Meditating For {item.meditating_experience}</p>
//                   </div>
//                 </div>
//               </div>
//               <hr />
//             </div>

//           )
//         };
//         return null;
//       })}
//     </div>
//   )
// }

// export default AddToFav
