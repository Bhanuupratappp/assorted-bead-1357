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

import image2 from "../../img/other/pay2.jpg"
import image3 from "../../img/upi.png"
import image4 from "../../img/other/cashback.png"
import Footer from "./Footer";




export default function Home() {





    return <div style={{fontFamily: "Roboto, sans-serif",}}>

        {/* You can trust us part start */}
        <img style={{ width: "85%", marginTop: "50px" }} src={image1} />
        {/* You can trust us part end */}




        {/* Upi money transfer start */}
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            fontFamily: "Roboto, sans-serif",
            // border: "2px solid red",
            padding: "50px",
            // boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
            // boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
            width: "1110px",
            marginLeft: "104px",
            marginTop: "70px",
            backgroundColor: "#f7f7f7",

            // webkitFilter: "grayscale(100%)",
            // filter: "grayscale(50%)"



        }}>
            <div >
                <div style={{ display: "flex" }}>
                    <img style={{ width: "120px" }} src={image3} alt="" />
                    <h4 style={{ textAlign: "left" }}>UPI Money<br /> Transefer</h4>
                </div>


                <h1 style={{ textAlign: "left", fontSize: "35px", marginTop: "40px" }}>Pay anyone you want <br />directly from your <br /> bank account.</h1>
                <p style={{ textAlign: "left", fontSize: "15px", fontWeight: "bold", color: "#8E8D8A" }}>We do have some other services as Mobile recharge, DTH, Electricity, Rent Payment,<br /> Loan Repayment, Education Fees, Insurance, Travel Bookings etc...</p>

                <a href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c&gclid=Cj0KCQjwu-KiBhCsARIsAPztUF0w_sKGO4yBZqnl5h9gvNiYK66zNJfQJUJBG4UZorFWj5zLvIwklIsaAvcGEALw_wcB&gclsrc=aw.ds">
                    <button style={{cursor:"pointer", marginRight: "480px", marginTop: "40px", backgroundColor: "black", padding: "10px 30px 10px 30px", color: "white", borderRadius: "10px" }}>Download PayOne App</button>
                </a>

            </div>





            <img src={image2} style={{ width: "30%", borderRadius: "50px" }} />

        </div>
        {/* Upi money transfer end */}

        {/* ---------------------------------------------------------------------------------------------- */}


        {/* Partner with us part start */}

        <div style={{ marginTop: "70px" }}>

            <div>
                <button style={{cursor:"pointer", padding: "20px 30px 20px 30px", fontWeight: "bold", fontSize: "20px", color: "white", borderRadius: "5px", border: "2px solid #e85a4f", backgroundColor: "#e85a4f", }}>Be Our Partner</button>

            </div>


            <div style={{ display: "flex", marginLeft: "40px", marginTop: "100px" }}>

                <img style={{ borderRadius: "100%", boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }} src="https://play-lh.googleusercontent.com/r2ZbsIr5sQ7Wtl1T6eevyWj4KS7QbezF7JYB9gxQnLWbf0K4kU7qaLNcJLLUh0WG-3pK" alt="" width="90" height="90" />

                <img style={{ borderRadius: "100%", marginLeft: "120px", marginTop: "100px", boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }} src="https://i.pinimg.com/originals/ab/72/9d/ab729ddb8bd3a3870d1845952a37f3da.jpg" width="90" height="90" alt="myntra" />

                <div style={{ marginTop: "40px", backgroundColor: "#cf9a9a", width: "20px", height: "20px", borderRadius: "50%" }}></div>

                <img style={{ borderRadius: "100%", marginLeft: "100px", boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }} src="https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg" width="90" height="90" alt="flipkart logo basket emblem" />

                <img style={{ borderRadius: "100%", marginLeft: "120px", marginTop: "100px", boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }} src="https://play-lh.googleusercontent.com/axx68Ova4QcYBxfuXy5MQQpW2WUd_XbQtqkHLZewNn4II1Imkr8yc5UL9HwP80XS35o" height="90" alt="" width="90" />

                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#59553a" }}></div>

                <img style={{ borderRadius: "100%", marginLeft: "110px", boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }} src="https://i.pinimg.com/736x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg" height="90" width="90" alt="" />

                <img style={{ borderRadius: "100%", marginLeft: "120px", marginTop: "100px", boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ycphsfhfjchprh2aqeka" alt="" width="90" height="90" />

                <div style={{ marginTop: "40px", width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#cfc685" }}></div>

                <img style={{ borderRadius: "100%", marginLeft: "90px", boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }} src="https://static.vecteezy.com/system/resources/previews/014/018/561/original/amazon-logo-on-transparent-background-free-vector.jpg" alt="" width="90" height="90" />

            </div>


        </div>

        {/* Partner with us part end */}


        {/* insurance and mutual fund start */}

        <div style={{ width: "85%", display: "flex", gap: "100px", margin: "auto", marginTop: "130px" }}>
            <div style={{ color: "white", backgroundColor: "#a5a4a1", width: "600px", height: "300px", paddingTop: "170px", display: "flex", gap: "30px", textAlign: "left", borderRadius: "10px", paddingTop: "70px" }}>

                <div>
                    <img style={{ borderTopRightRadius: "50%", borderBottomRightRadius: "50%" }} src="https://media.istockphoto.com/id/1181901597/vector/flat-metaphor-poster-presenting-insurance-services-cartoon-male-customer-and-agent-shaking.jpg?s=612x612&w=0&k=20&c=xYeFhyRwz20Cxg2xG9ulqsevJjGgBNvbdsDo5U7xBtQ=" width={230} height={230} alt="" />
                </div>
                <div>
                    <h3 >Have an Insurance</h3>
                    <p>Secure your life, health and more.</p>
                    <button style={{cursor:"pointer", backgroundColor: "#e85a4f", padding: "10px 20px 10px 10px", color: "white", border: "2px solid #e85a4f", borderRadius: "10px" }}>Get Insurance</button>
                </div>


            </div>
            <div style={{ color: "white", backgroundColor: "#a5a4a1", width: "600px", height: "300px", display: "flex", gap: "30px", textAlign: "left", paddingTop: "70px", borderRadius: "10px" }}>

                <div>
                    <img style={{ borderTopRightRadius: "50%", borderBottomRightRadius: "50%" }} src="https://media.istockphoto.com/id/1364611752/vector/invest-in-a-portfolio-of-high-growth-stock-profit-making-and-business-development-concept.jpg?s=612x612&w=0&k=20&c=Mm7ogg-OmHdgZEw8nRc4lVrqwEoApwRhUBP7XlpTlhI=" width={230} height={230} alt="" />
                </div>
                <div>
                    <h3>Mutual Funds</h3>
                    <p>Start investing today to fulfill all your dreams.</p>
                    <button style={{ cursor:"pointer",backgroundColor: "white", padding: "10px 35px 10px 10px", color: "#e85a4f", border: "2px solid #e85a4f", borderRadius: "10px" }}>Start Today</button>
                </div>

            </div>
        </div>
        {/* insurance and mutual fund end */}


        {/* cashback thing start here */}
        <div style={{ marginTop: "130px" }}>
            <div>
                <h1>GET CASHBACK UPTO 30%</h1>
                <p>Every time you transfer money to anyone</p>
            </div>
            <div style={{

                width: "700px",

                margin: "auto",
                // backgroundColor:"white",
                boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                display: "flex",

                padding: "20px",
                borderRadius: "30px"

            }}>
                <img src={image4} width={100} height={100} alt="" />
                <img style={{ borderRadius: "30px" }} src="https://media.istockphoto.com/id/1357708631/vector/3d-shopping.jpg?s=612x612&w=0&k=20&c=W2CDw3kwfhuF0YCmus80upLoMcBiyRDsp-zPUxbV7lU=" width={500} height={400} alt="" />
                <img src={image4} width={100} height={100} alt="" />
            </div>
        </div>
        {/* cashback thing ends here */}
        <br />

        {/* <div style={{marginTop:"20px",boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}}>
        
        <div style={{display:"flex", gap:"130px",marginTop:"40px"}}>
            <img style={{width:"150px",height:"150px",marginTop:"40px",marginLeft:"20px"}} src={image8} alt="" />
            <div style={{ marginLeft: "20px", marginTop: "40px", display: "flex", color: "#292928", textAlign: "left", gap: "30px", }}>
                <div style={{marginTop:"15px"}}>
                    <h4>Download PayOne app and enjoy <br /> paying anyone effortlessly</h4>
                </div>
                <div>
                    <img src={image6} alt="" width={150} height={120} />
                    <img style={{ marginBottom: "25px" }} src={image7} alt="" width={170} height={70} />
                </div>
            </div>

            <div style={{display:"flex",gap:"80px"}}>
                <div>
                    <h5>General</h5>
                    <p>More about us</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    
                </div>
                <div>
                    <h5>Legal</h5>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Trust & Safety</p>
                    <p>How to Pay</p>
                    
                </div>
            </div>




        </div>
        

        <div style={{display:"flex", gap:"480px",marginLeft:"20px"}}>

        <p>© 2023, All rights reserved</p>
        
        <div style={{marginTop:"10px",display:"flex",gap:"10px"}}>
            <img src={twitter} alt="" width={30} height={30} />
            <img src={linkedin} alt="" width={30} height={30} />
            <img src={facebook} alt="" width={30} height={30}/>
            <img src={youtube} alt="" width={30} height={30} />
        </div>
        </div>

        </div> */}

        <Footer />

    </div>
}