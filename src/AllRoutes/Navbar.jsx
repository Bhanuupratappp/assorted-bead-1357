import { NavLink } from "react-router-dom"
import { ThemeContext } from "../AuthContextProvider/ThemeContextProvider"
import { useContext } from "react"
import image2 from "../../src/img/finallogo.jpg"


export default function Navbar() {
const {theme} = useContext(ThemeContext)



    return <div style={{
        display: "flex",
        gap: "450px",
        padding:"25px 0px 25px 110px",
        fontFamily: "Roboto, sans-serif",
        
        
        // paddingLeft:"160px",
        backgroundColor:"#EAE7DC",
        // width:"100%",
        height:"70px",
        
        position:"sticky",
        top:"0"
        

}}>
       
       
       <div>
        <img style={{width:"80px"}} src={image2} alt="" />
        <h2>
            
        </h2>
       </div>
        <div style={{
            marginTop:"25px",
            display: "flex",
            gap: "120px",
            marginLeft:"110px",
            fontWeight:"bold",
            color:"#444442",
            textDecoration:"none"
            
            





        }}>
            
            <NavLink style={({ isActive }) => ({
    color: isActive ? '#fe4333 ' : 'black',
    textDecoration:"none",
    borderBottom: isActive? "2px solid red":""

  })} to="/">Home</NavLink>
            <NavLink style={({ isActive }) => ({
    color: isActive ? '#fe4333 ' : 'black',
    textDecoration: "none",
    borderBottom: isActive? "2px solid red":""

  })} to="/contact" >Contact</NavLink>
            <NavLink style={({ isActive }) => ({
    color: isActive ? '#fe4333 ' : 'black',
    textDecoration: "none",
    borderBottom: isActive? "2px solid red":""

  })} to="/about-us" >About</NavLink>
            
            <NavLink style={({ isActive }) => ({
    color: isActive ? '#fe4333 ' : 'black',
    textDecoration: "none",
    borderBottom: isActive? "2px solid red":""

  })} to="/login" >Login</NavLink>

        </div>
    </div>
}