


import { createContext, useState } from "react";

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{
    const [logout, setLogout] = useState(false)

    
    return <AuthContext.Provider value={{logout, setLogout}}>
        {children}
    </AuthContext.Provider>
}

