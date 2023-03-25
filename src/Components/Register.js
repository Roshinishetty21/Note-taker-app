import React, { useState } from 'react';
import "./Register.css";


const Register = () =>{
    const[password,setpassword] = useState('');
    const[repeatpassword,setrepeatpassword] = useState('');
    if(password!==repeatpassword){
        alert("passwords are not matching");
    }
    return(
        <>
        <div className='container'>
            <h1>Sign Up</h1>
            <input type="text" placeholder='Enter Your Email'/> <br/>
            <input type="password" placeholder='Enter Your Password' 
            value={password} onChange={(e)=>{setpassword(e.target.value)}}/> <br/>
            <input type="password" placeholder='Enter Your Repeat Password' 
            value={repeatpassword} onChange={(e)=>{setrepeatpassword(e.target.value)}}/> <br/>
            <button>Continue</button>
            
            
        </div>
        </>
    )
}
export default Register; 