import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () =>{
    return(
        <>
        <div className="container">
            <h1>Signin</h1>
            <input type="text" placeholder="Enter Your Email" defaultValue="Email"/> <br/>
            <input type="password" placeholder="Enter Your Password" defaultValue="password"/> <br/>
            <button>Submit</button>
            <Link to ="/Register"><button id="btn1">Continue</button></Link>
            
        </div>
        </>
    )
}
export default Signin;