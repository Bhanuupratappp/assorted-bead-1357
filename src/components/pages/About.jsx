import about from "../../img/other/aboutis.jpg"
import award from "../../img/other/awards.jpg"
import awardlogo from "../../img/other/1award.png"
import Footer from "./Footer"

export default function About(){
    return <div>
     
          <div style={{
            display:"flex",
            gap:"50px",
            width:"85%",
            margin:"auto",
            marginTop:"50px",
            textAlign:"left",
            
            borderRadius:"20px",
            padding:"20px",
            boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"
            
            }}>
                <div>
                <h2 style={{color: "#444442"}}>To offer every Indian equal opportunity to accelerate their progress by unlocking the flow of money and access to services</h2>
                <button style={{cursor:"pointer", border: "none", borderRadius: "20px", color: "white", backgroundColor: "#e85a4f", fontSize: "20px", padding: "20px 30px 20px 30px",marginTop:"20px" }}>Know More</button>

                </div>

                    
                <img src={about} alt="" style={{width:"46%",borderRadius:"10px"}} />
                

          </div>


          


          <div style={{width:"100%",
        //   backgroundColor:"#cecbc1",
          
          padding:"30px",
          display:"flex",
          margin:"auto",
          justifyContent:"space-between",
          marginTop:"100px",
          borderRadius:"10px"
          
          }}>
            <img src={awardlogo} alt="" width={150} height={150} />
            <img src={award} alt="" style={{width:"50%",borderRadius:"10px"}} height={340} />
            <img src={awardlogo} alt="" width={150} height={150} />
            </div>
            
            
            
            
            <div style={{width:"85%",margin:"auto",marginTop:"100px",color:"#444442"}}>

           
            <h1 style={{color:"#e36e66",fontSize:"80px"}}>Our Founders</h1>
            
<hr />

            <div style={{display:"flex",gap:"50px",marginTop:"40px"}}>
                
                <div style={{width:"40%"}}>
                    <img src="https://www.phonepe.com/webstatic/static/founder-sn-30fdca89c33677c729284f3c76cff9ea.png" width={150} height={150} alt="" />
                    <h1>Sameer Nigam</h1>
                    <p style={{textAlign:"left",}}>Sameer Nigam founded PayOne in 2015 and serves as its Chief Executive Officer. Before PayOne, he served as the SVP Engineering</p>
                </div>
                <div style={{width:"40%"}}>
                    <img src="https://www.phonepe.com/webstatic/static/founder-rc-6fded1424a3b8ed2fcc12f14550d32c6.png" alt="" width={150} height={150} />
                    <h1>Rahul Chari</h1>
                    <p style={{textAlign:"left",}}>Rahul Chari is the Chief Technology officer at PayOne. He comes with two decades of experience spanning embedded systems</p>
                </div>
                <div  style={{width:"40%"}}>
                    <img src="https://www.phonepe.com/webstatic/static/founder-be-c6404a29abc85e1b9cd31b8cc21bd64d.png" alt="" width={150} height={150} />
                    <h1>Burzin Engineer</h1>
                    <p style={{textAlign:"left",}}>Burzin is the Chief Reliability Officer at PayOne. He has more than 25 years of experience in the dot-com space.</p>
                </div>
            </div>

            </div>

            <Footer />
            

    </div>
}