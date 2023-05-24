import {Routes,Route} from "react-router-dom"
import Home from "../components/pages/Home"
import Contact from "../components/pages/Contact"
import About from "../components/pages/About"

import Login from "../components/pages/Login"

export default function AllRoutes(){
    return <>
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
      
        <Route path="/login" element={<Login />} />
    </Routes>
    
    
    
    </>
}
