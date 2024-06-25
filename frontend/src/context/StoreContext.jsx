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
        try {
            const response = await axios.get(url + "/api/experiences/list");
            set_exp_videos_list(response.data.data);
        } catch (error) {
            console.error("Error fetching experiences list:", error);
        }
    } //line 55 on refreshing to prevent..

    // Creating fav videos state
    const [favVideos, setFavVideos] = useState({});

    // Function to add a video to favorites
    const addToFav = async (videoId) => {
        setFavVideos(prevFavVideos => ({
            ...prevFavVideos,
            [videoId]: true
        }));
        //after setting up the API
        if (token) {
            try {
                await axios.post(url + "/api/fav/add", { videoId }, { headers: { token } });
            } catch (error) {
                console.error("Error adding to favorites:", error);
            }
        }
    };

    // Function to remove a video from favorites
    const removeFromFav = async (videoId) => {
        setFavVideos(prevFavVideos => {
            const updatedFavVideos = { ...prevFavVideos };
            delete updatedFavVideos[videoId];
            return updatedFavVideos;
        });
        //after setting up the API
        if (token) {
            try {
                await axios.post(url + "/api/fav/remove", { videoId }, { headers: { token } });
            } catch (error) {
                console.error("Error removing from favorites:", error);
            }
        }
    };

    // To store the fav videos even after refreshing
    const loadFavData = async (token) => {
        try {
            const response = await axios.post(url + "/api/fav/list", {}, { headers: { token } }) //to get the data nothing we have to send so empty{}

            if (response.data && response.data.favData) {
                setFavVideos(response.data.favData)//save the fav data in a variable
            } else {
                setFavVideos({});
            }
        }
        catch (error) {
            console.error("Error loading favorite data:", error);
        }
        //call this function whenever the page is loaded line 56 useEffect
    }

    //on refreshing to prevent logging out, storing the token in a token state when refreshing
    useEffect(() => {
        async function loadData() {
            await fetch_exp_list();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadFavData(storedToken);
            }
        }
        loadData();
    }, [])

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