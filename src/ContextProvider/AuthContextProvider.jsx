


import { createContext, useState } from "react";

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{
    const [logout, setLogout] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [logIn, setLogIn] = useState(false)


    
    return <AuthContext.Provider value={{logIn,setLogIn,logout, setLogout,loggedIn,setLoggedIn}}>
        {children}
    </AuthContext.Provider>
}

