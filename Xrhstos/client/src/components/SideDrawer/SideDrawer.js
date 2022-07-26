import React from "react";
import './SideDrawer.css';

const sideDrawer = props =>{
    
    
    return(
    <nav className="sideDrawer"> 
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Map</a></li>
            <li><a href="/">Personalized Card</a></li>
            <li><a href="/">Help</a></li>
        </ul>
    </nav>
    )
};

export default sideDrawer;