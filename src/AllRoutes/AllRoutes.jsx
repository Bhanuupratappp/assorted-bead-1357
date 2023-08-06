import {Routes,Route} from "react-router-dom"
import Home from "../components/pages/Home"
import Contact from "../components/pages/Contact"
import About from "../components/pages/About"

import Login from "../components/pages/Login"
import AdminPage from "../components/pages/AdminPage"
import AdminLogin from "../components/pages/AdminLogin"
import PrivateRoute from "./PrivateRoute"

export default function AllRoutes(){
    return <>
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
       
        <Route path="/admin" element={
            <PrivateRoute>
            <AdminPage />
            </PrivateRoute>
        
        } />
       
        <Route path="/adminlogin" element={<AdminLogin />} />
      
        <Route path="/login" element={<Login />} />
    </Routes>
    
    
    
    </>
}
