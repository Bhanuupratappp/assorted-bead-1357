import query from "../../img/query.png"
import contact from "../../img/other/abc.jpg"
import help from "../../img/other/support.jpg"
import fraud from "../../img/other/fraud.jpg"
import { useState } from "react"
import Footer from "./Footer"


export default function Contact() {
    const [getHelp, setHelp] = useState(false)

    const Bcolor = {
        border: "none",
        borderBottom:"2px solid #e85a4f",
    }


    return <div>

        <div>


            <div>
                {/* <img src={contact} alt="" style={{ width: "85%", marginTop: "50px", borderRadius: "10px" }} height={700} /> */}

            </div>

            <div>
                <div style={{
                    display: "flex",
                    //  justifyContent:"center",
                    //  gap:"60px",

                    border: "2px solid #d2d2d2",
                    width: "85%",
                    borderRadius: "20px",
                    margin: "auto",
                    marginTop: "80px",

                    padding: "40px 0px 40px 0px"


                }}>
                    <button onClick={() => setHelp(false)} style={{cursor:"pointer", border: "none", borderRadius: "20px", color: "white", backgroundColor: "#e85a4f", fontSize: "20px", padding: "20px 30px 20px 30px", marginLeft: "30%" }}>Customer Support</button>
                    <hr />
                    <button onClick={() => setHelp(true)} style={{ cursor:"pointer",border: "none", borderRadius: "20px", color: "white", backgroundColor: "#e85a4f", fontSize: "20px", padding: "20px 47px 20px 47px", marginRight: "30%" }}>Report Fraud</button>
                </div>
            </div>

            {/* conditional rendering for customer support and fraud start*/}

            {
                getHelp ?

                    <div style={{
                        display: "flex",
                        width: "85%",
                        margin: "auto",
                        justifyContent: "center",
                        gap: "80px",
                        marginTop: "70px",
                        backgroundColor: "white",
                        textAlign: "left",
                        borderRadius: "10px"




                    }}>
                        <div style={{ marginTop: "60px", color: "#444442" }}>
                            <h1>Report Fraud</h1>
                            <h5 style={{ color: "#858583" }}>Noticing any suspicious activity? Report it to us immediately. <br /> Response time: within 24 hours </h5>
                            <h4 style={{ color: "#858583" }}>Or Tap Below</h4>
                            <button style={{cursor:"pointer", fontWeight: "bold", border: "2px solid #e85a4f", padding: "8px 10px 8px 10px", borderRadius: "10px", color: "#e85a4f", backgroundColor: "white" }}>Get Help</button>
                            <h4 style={{ color: "#858583" }}>To reach us by phone, tap below</h4>
                            <button style={{cursor:"pointer", fontWeight: "bold", border: "2px solid #e85a4f", padding: "8px 10px 8px 10px", borderRadius: "10px", color: "#e85a4f", backgroundColor: "white" }}>Contact Us</button>
                        </div>
                        <div>
                            <img src={fraud} alt="" width={500} height={500} />
                        </div>
                    </div>





                    :





                    <div style={{
                        display: "flex",
                        width: "85%",
                        margin: "auto",
                        justifyContent: "center",
                        gap: "80px",
                        marginTop: "70px",
                        backgroundColor: "white",
                        textAlign: "left",
                        borderRadius: "10px"




                    }}>
                        <div style={{ marginTop: "60px", color: "#444442" }}>
                            <h1>Customer Support</h1>
                            <h5 style={{ color: "#858583" }}>To get instant help, tap on your PayOne app home screen <br /> & select the relevant topic.</h5>
                            <h4 style={{ color: "#858583" }}>Or Tap Below</h4>
                            <button style={{cursor:"pointer", fontWeight: "bold", border: "2px solid #e85a4f", padding: "8px 10px 8px 10px", borderRadius: "10px", color: "#e85a4f", backgroundColor: "white" }}>Get Help</button>
                            <h4 style={{ color: "#858583" }}>To reach us by phone, tap below</h4>
                            <button style={{cursor:"pointer", fontWeight: "bold", border: "2px solid #e85a4f", padding: "8px 10px 8px 10px", borderRadius: "10px", color: "#e85a4f", backgroundColor: "white" }}>Contact Us</button>
                        </div>
                        <div>
                            <img src={help} alt="" width={500} height={500} />
                        </div>
                    </div>
            }

            {/* conditional rendering for customer support and fraud ends*/}

            <div style={{
                
                display:"flex",
                textAlign:"left",
                justifyContent:"center",
                margin:"auto",
                marginTop:"60px",
                gap:"185px",
                color:"#444442"
                
                
                }}>

                <div>
                <div>
                    <h1>Registered Address</h1>

                    <p>PayOne Private Limited <br />
                    (Formerly known as FX Mart Private Ltd. ), <br />
                    Unit No.001, Ground Floor, Boston House, <br />
                    Suren Road, Off. Andheri-Kurla Road,<br />
                    Andheri(East) Mumbai, Maharashtra, India, Pincode- 400093
                    </p>
                 <a href="https://www.google.com/maps/place/Boston+House,+Prakashwadi+Rd,+Chakala,+Andheri+East,+Mumbai,+Maharashtra+400053/@19.1169538,72.8539816,17z/data=!3m1!4b1!4m9!1m2!2m1!1sPhonepe+Mumbai+office+boston+house+map!3m5!1s0x3be7c8320fb16087:0xea42d8c18fa8ff89!8m2!3d19.1169538!4d72.8565565!16s%2Fg%2F12hk965zz">
                  <button style={{cursor:"pointer",border:"none",backgroundColor:"#EAE7DC",fontSize:"20px",color:"#5048eb",fontWeight:"bold"}}>View in Maps</button>
                 </a>
                 
                 

                 </div>

                <div style={{marginTop:"50px"}}>
                    <h1>Mailing Address</h1>
                    <p>
                    PayOne Private Limited <br />
                    Office-2, Floor 4,5,6,7, Wing A, Block A,<br />
                    Salarpuria Softzone, Service Road, <br />
                    Green Glen Layout, Bellandur <br />
                    Bengaluru, Karnataka-KA, Pincode- 560103 
                    </p>
                    <a href="https://www.google.com/maps/place/Salarpuria+Softzone/@12.9242528,77.6700857,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae13760d58dd77:0x5d1703aa07d3ea8b!8m2!3d12.9242528!4d77.6700857!16s%2Fg%2F11cn0xsvfz">
                    <button style={{cursor:"pointer",border:"none",backgroundColor:"#EAE7DC",fontSize:"20px",color:"#5048eb",fontWeight:"bold"}}>View in Maps</button>

                    </a>
                    
                </div>
                </div>

                <div style={{marginTop:"50px"}} >
                 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7880080821233!2d72.85398157511338!3d19.116953782096076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8320fb16087%3A0xea42d8c18fa8ff89!2sBoston%20House%2C%20Prakashwadi%20Rd%2C%20Chakala%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1683804868085!5m2!1sen!2sin" width="500" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

        </div>
        <Footer />
    </div>
}