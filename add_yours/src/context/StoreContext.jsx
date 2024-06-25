import { createContext } from "react";
import { exp_videos_list } from "../assets/assets.js";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const contextValue = {
        exp_videos_list
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}