import image1 from "../../img/gplay.png"
import image2 from "../../img/appstore1.png"
import { useContext, useEffect, useState } from "react"
import sign from "../../img/other/sign.png"
import Footer from "./Footer";
import log from "../../img/other/login.jpg";
import log2 from "../../img/other/log.jpg"
import axios from "axios";
import { Navigate } from "react-router-dom";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/AuthContextProvider";




export default function Login() {
    const [login, setLogin] = useState(false)
    const [sign, setSign] = useState(false)
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [data, setData] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [pemail, setPemail] = useState("")
    const [ppass, setPpass] = useState("")
    
    const {logout, setLogout} = useContext(AuthContext)



    let navigate = useNavigate();

    const LoggedIn = () => {
        navigate("/");
    };


    useEffect(() => {


        axios({

            url: "http://localhost:8080/data",
            method: "get",

        })
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })

        {
            for (let i = 0; i < data.length; i++) {
                if (data[i].email === email && data[i].password === pass) {
                    setLoggedIn(true)
                    setLogout(!logout)
                    console.log("done")
                } else {
                    console.log("wrong")
                }
            }
        }
       
    }, [submit])





    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "" && pass === "") {
            alert("Enter your Email and Password first")
            return
        } else if (email === "" || pass === "") {
            alert("Please enter your Email and Password both")
            return
        }
        let count = 0
        for (let i = 0; i < data.length; i++) {
            if (data[i].email === email&&data[i].password===pass) {
                setSubmit(!submit)
                setEmail("")
                setPass("")
                
            }else{
                count++
            }
            

        }
        if(count===data.length){
            return alert("You have entered wrong credentials")
        }
        
        
        
    }

    const postData = (e) => {
        e.preventDefault()
        if (pemail === "" && ppass === "") {
            alert("Enter your Email and Password first")
            return
        } else if (pemail === "" || ppass === "") {
            alert("Please enter your Email and Password both")
            return
        }

        for (let i = 0; i < data.length; i++) {
            if (data[i].email === pemail) {
                setPemail("")
                setPpass("")
                setSign(!sign)
                return alert("You already have an account, please Log in")
            }
        }

        const postLogin = {
            email: pemail,
            password: ppass
        }


        axios({

            url: "http://localhost:8080/data",
            method: "post",
            data: postLogin

        })
            .then((res) =>
                console.log(res)

            )
        setPemail("")
        setPpass("")
        setSign(!sign)
        alert("Thanks for Signing up, You can Log in now")

    }



    if (loggedIn === true) {
        LoggedIn()
    }




    return <div >
        {
            !login ?



                <div style={{ borderRadius: "10px", backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", display: "flex", width: "700px", margin: "auto", marginTop: "60px", height: "100%", padding: "40px" }}>
                    <div style={{ textAlign: "left" }}>
                        <h2 style={{ color: "#e85a4f" }}>To Login into your PayOne Web account</h2>
                        <p>1. Open PayOne App</p>
                        <p>2. Tap Scan option available at the bottom</p>
                        <p>3. Point PayOne Scan at QR Code to login</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h4 style={{ color: "#8E8D8A" }}>To create an account download PayOne app</h4>

                        <div style={{ display: "flex" }}>
                            <img src={image1} alt="" width={150} height={120} />
                            <img style={{ marginTop: "25px" }} src={image2} alt="" width={170} height={70} />
                        </div>


                    </div>

                    <div>

                        <img style={{ paddingTop: "10px" }} src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png" width={300} height={300} alt="" />
                        <h3>Or</h3>
                        <button onClick={() => setLogin(!login)} style={{ marginTop: "15px", cursor: "pointer", border: "none", borderRadius: "20px", color: "white", backgroundColor: "#e85a4f", fontSize: "20px", padding: "16px 40px 16px 40px" }}>Sign Up | Log In</button>

                    </div>







                </div>




                :



                <div>
                    {
                        sign ? <div style={{ borderRadius: "10px", display: "flex", gap: "20px", justifyContent: "center", backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", width: "700px", margin: "auto", marginTop: "60px", height: "100%", padding: "40px" }}>
                            <div>
                                <div>
                                    <h1 style={{ color: "#8E8D8A" }}>Welcome to PayOne</h1>
                                </div>

                                <div style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
                                    <button onClick={() => setSign(false)} style={{ marginTop: "15px", cursor: "pointer", border: "none", borderBottom: "2px solid #e85a4f", borderRadius: "20px", color: "#e85a4f", backgroundColor: "white", fontSize: "20px", padding: "16px 40px 16px 40px" }}>SignUp</button>

                                    <button onClick={() => setSign(true)} style={{ marginTop: "15px", cursor: "pointer", border: "none", borderRadius: "20px", color: "white", backgroundColor: "#e85a4f", fontSize: "20px", padding: "16px 48px 16px 48px" }}>LogIn</button>
                                </div>



                                <div style={{ marginTop: "30px" }}>


                                    <form onSubmit={handleSubmit}  >
                                        <input
                                            style={{ padding: "10px", paddingBottom: "20px", margin: "10px", width: "200px", border: "none", borderBottom: "2px solid orange" }}
                                            name="eemail"
                                            type="email"
                                            value={email}

                                            placeholder="Enter your Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <br />
                                        <input

                                            style={{ padding: "10px", paddingBottom: "20px", margin: "10px", width: "200px", border: "none", borderBottom: "2px solid orange", }}
                                            name="ppass"
                                            type="password"
                                            value={pass}
                                            placeholder="Enter your password"
                                            onChange={(e) => setPass(e.target.value)}
                                        />
                                        <button style={{ cursor: "pointer", color: "#e85a4f", border: "none", backgroundColor: "white", marginRight: "100px", marginTop: "20px" }}>Forgot Password</button>
                                        <br />
                                        <br />
                                        <input style={{autoFocus:"true", cursor: "pointer", border: "none", fontWeight: "bold", color: "#e85a4f", backgroundColor: "#EAE7DC", padding: "8px 30px 8px 30px" }} autoFocus className="submit" value="Log in" type="submit" />
                                        {/* <img src={sign} alt="" width={140} type="submit" /> */}

                                    </form>



                                </div>
                            </div>








                            <div style={{ marginTop: "20px" }}>
                                <img src={log2} alt="" width={400} />
                            </div>

                        </div>




                            :



                            <div style={{ borderRadius: "10px", display: "flex", gap: "20px", justifyContent: "center", backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", width: "700px", margin: "auto", marginTop: "60px", height: "424px", padding: "40px" }}>
                                <div>
                                    <div>
                                        <h1 style={{ color: "#8E8D8A" }}>Welcome to PayOne</h1>
                                    </div>

                                    <div style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
                                        <button onClick={() => setSign(false)} style={{ marginTop: "15px", cursor: "pointer", border: "none", borderRadius: "20px", color: "white", backgroundColor: "#e85a4f", fontSize: "20px", padding: "16px 40px 16px 40px" }}>SignUp</button>

                                        <button onClick={() => setSign(true)} style={{ marginTop: "15px", cursor: "pointer", border: "none", borderBottom: "2px solid #e85a4f", borderRadius: "20px", color: "#e85a4f", backgroundColor: "white", fontSize: "20px", padding: "16px 48px 16px 48px" }}>LogIn</button>
                                    </div>



                                    <div style={{ marginTop: "30px" }}>


                                        <form onSubmit={postData} >
                                            <input
                                                style={{ padding: "10px", paddingBottom: "20px", margin: "10px", width: "200px", border: "none", borderBottom: "2px solid orange" }}
                                                name="email"
                                                type="email"
                                                value={pemail}
                                                placeholder="Enter Email"
                                                onChange={(e) => setPemail(e.target.value)}
                                            />
                                            <br />
                                            <input

                                                style={{ padding: "10px", paddingBottom: "20px", margin: "10px", width: "200px", border: "none", borderBottom: "2px solid orange", }}
                                                name="password"
                                                type="password"

                                                placeholder="Enter password"
                                                onChange={(e) => setPpass(e.target.value)}
                                                value={ppass}

                                            />
                                            <br />
                                            <br />
                                            <input style={{ cursor: "pointer", border: "none", fontWeight: "bold", color: "#e85a4f", backgroundColor: "#EAE7DC", padding: "8px 30px 8px 30px" }} value="Sign up" className="submit" type="submit" />
                                            {/* <img src={sign} alt="" width={140} type="submit" /> */}

                                        </form>



                                    </div>
                                </div>








                                <div style={{ marginTop: "75px" }}>
                                    <img src={log} alt="" width={400} />
                                </div>

                            </div>


                    }
                </div>



        }

        <br /><br /><br /><br /><br />
        <Footer />
    </div>
}
