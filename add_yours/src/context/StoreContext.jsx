import { createContext, useState } from "react";
// import { exp_videos_list_1 } from '../assets/assets'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

    const [writeExpItems, setWriteExpItems] = useState({})

    const saveWriteExp = (writeExpId) => {
        if (!writeExpItems[writeExpId]) {
            <p> Start noting your experiences </p>
            setWriteExpItems((prev)=>({...prev,[expId]:1}))
        }
        else{
            
        }
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;