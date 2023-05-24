import React from "react";
import image6 from "../../img/gplay.png"
import image7 from "../../img/appstore1.png"
import image8 from "../../img/finallogo.jpg"
import twitter from "../../img/other/twitter.png"
import facebook from "../../img/other/facebook1.png"
import youtube from "../../img/other/youtube.png"
import linkedin from "../../img/other/linkedin.png"

// import {ArrowForwardIcon} from "react-icons"

import image1 from "../../img/slide1.jpg"
import SliderImage from "./SliderImage";
import image2 from "../../img/other/pay.jpg"
import image3 from "../../img/upi.png"
import image4 from "../../img/other/cashback.png"

export default function Footer(){
    return <div style={{marginTop:"100px",boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}}>
        
    <div style={{display:"flex", gap:"130px",marginTop:"40px"}}>
        <img style={{width:"150px",height:"150px",marginTop:"40px",marginLeft:"20px"}} src={image8} alt="" />
        <div style={{ marginLeft: "20px", marginTop: "40px", display: "flex", color: "#292928", textAlign: "left", gap: "30px", }}>
            <div style={{marginTop:"15px"}}>
                <h4>Download PayOne app and enjoy <br /> paying anyone effortlessly</h4>
            </div>
            <div>
                <img style={{cursor:"pointer",}} src={image6} alt="" width={150} height={120} />
                <img style={{ cursor:"pointer",marginBottom: "25px" }} src={image7} alt="" width={170} height={70} />
            </div>
        </div>

        <div style={{display:"flex",gap:"80px"}}>
            <div>
                <h5 style={{cursor:"pointer"}}>General</h5>
                <p style={{cursor:"pointer"}}>More about us</p>
                <p style={{cursor:"pointer"}}>Contact Us</p>
                <p style={{cursor:"pointer"}}>Careers</p>
                <p style={{cursor:"pointer"}}>Blog</p>
                
            </div>
            <div>
                <h5 style={{cursor:"pointer"}}>Legal</h5>
                <p style={{cursor:"pointer"}}>Terms & Condition</p>
                <p style={{cursor:"pointer"}}>Privacy Policy</p>
                <p style={{cursor:"pointer"}}>Trust & Safety</p>
                <p style={{cursor:"pointer"}}>How to Pay</p>
                
            </div>
        </div>




    </div>
    

    <div style={{display:"flex", gap:"480px",marginLeft:"20px"}}>

    <p>© 2023, All rights reserved</p>
    
    <div style={{marginTop:"10px",display:"flex",gap:"10px"}}>
        <img style={{cursor:"pointer"}} src={twitter} alt="" width={30} height={30} />
        <img style={{cursor:"pointer"}} src={linkedin} alt="" width={30} height={30} />
        <img style={{cursor:"pointer"}} src={facebook} alt="" width={30} height={30}/>
        <img style={{cursor:"pointer"}} src={youtube} alt="" width={30} height={30} />
    </div>
    </div>

    </div>
}


