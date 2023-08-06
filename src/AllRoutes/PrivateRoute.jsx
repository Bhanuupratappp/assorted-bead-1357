import {useContext} from "react"
import {Navigate} from "react-router-dom"
import { AuthContext } from "../ContextProvider/AuthContextProvider"
// import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({children}) {
const {logIn,logout} =useContext(AuthContext)

if(!logIn){
    return <Navigate to="/adminlogin" />
}
return children

}
 
export default PrivateRoute;