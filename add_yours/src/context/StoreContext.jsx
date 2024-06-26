import  { createContext } from "react";
import { exp_videos_list_1 } from '../assets/assets'
 
export const StoreContext = createContext()

const StoreContextProvider = (props) => {

    // const [expVideosList,SetExpVideosList] = useState([])

    const contextValue = {
        exp_videos_list_1 
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;