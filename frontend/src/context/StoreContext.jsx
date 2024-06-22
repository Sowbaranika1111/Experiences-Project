import { createContext, useEffect, useState } from "react";
// import { exp_videos_list } from "../assets/assets"; removing after setting the state variable
import axios from "axios"

//v hv created a context. context name is StoreContext and we hv exported it,'createContext is what we get from React (1st line)'
export const StoreContext = createContext(null)

// creating StoreContext provider func
const StoreContextProvider = (props) => {

    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    const [exp_videos_list, set_exp_videos_list] = useState([])


    const fetch_exp_list = async () => {
        const response = await axios.get(url + "/api/experiences/list")
        set_exp_videos_list(response.data.data)
    }

    //on refreshing to prevent logging out, storing the token in a token state when refreshing
    useEffect(() => {
        async function loadData() {
            await fetch_exp_list();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
            }
        }
        loadData();
    }, [])

    // Creating fav videos state
    const [favVideos, setFavVideos] = useState({});

    // Function to add a video to favorites
    const addToFav = (videoId) => {
        setFavVideos(prevFavVideos => ({
            ...prevFavVideos,
            [videoId]: true
        }));
    };

    // Function to remove a video from favorites
    const removeFromFav = (videoId) => {
        setFavVideos(prevFavVideos => {
            const updatedFavVideos = { ...prevFavVideos };
            delete updatedFavVideos[videoId];
            return updatedFavVideos;
        });
    };
    
    // useEffect(() =>{
    //     console.log(favVideos);
    // },[favVideos]) 

    // if we add any element in this obj, we can access that element from any other component through this context
    const contextValue = {
        exp_videos_list,

        url,//to access this variable in any component , we pass it here
        token,
        setToken,

        favVideos,
        addToFav,
        removeFromFav
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider


// to add the support of this context in our prjt add this in main.jsx