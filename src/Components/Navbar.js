import React from "react";
import "./Navbar.css";
const Navbar = () =>{
    return(
        <>
        <div className="container">
        <header className="header">
            <nav className="nav">
                <ul>
                    <li><a href="#Home" target="_blank">Home</a></li>
                    <li><a href="#Addnote" target="_blank">Addnote</a></li>
                    <li><a href="#DeleteAll" target="_blank">DeleteAll</a></li>
                    <li><a href="#Export" target="_blank">Export</a></li>
                </ul>
            </nav>
        </header>
        <main className="main">
            <div className="search">Search !</div>
            <div className="box1"></div>
            <div className="box2"></div>

        </main>
        </div>
        </>
        
    )

}
export default Navbar;