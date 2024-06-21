import { createContext, useState } from "react";
// import { videos_list } from "../assets/assets";
import { exp_videos_list } from "../assets/assets";

//v hv created a context. context name is StoreContext and we hv exported it,'createContext is what we get from React (1st line)'
export const StoreContext = createContext(null)

// creating StoreContext provider func
const StoreContextProvider = (props) => {

    const url = "http://localhost:4000"
    const [token,setToken] = useState("");

    // if we add any element in this obj, we can access that element from any other component through this context
    const contextValue = {
        exp_videos_list,

        url,//to access this variable in any component , we pass it here
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider


// to add the support of this context in our prjt add this in main.jsx