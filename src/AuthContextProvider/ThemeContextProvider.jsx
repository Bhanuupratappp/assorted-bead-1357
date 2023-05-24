
import { createContext } from "react";

export const ThemeContext = createContext()
export const ThemeContextProvider = ({children})=>{

    const theme = {
        color:"#1e1e1e",
        textDecoration:"none",
        
        fontSize:"15px",
        

        // fontFamily: "Bree Serif, serif"
        // fontFamily: 'Great Vibes, cursive'
        fontFamily: 'Montserrat, sans-serif'
    }
    return <ThemeContext.Provider value={{theme}}>
        {children}
    </ThemeContext.Provider>
}

