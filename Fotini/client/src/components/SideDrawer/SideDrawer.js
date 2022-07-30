import React from "react";
import './SideDrawer.css';

const sideDrawer = props =>{
    
    
    return(
    <nav className="sideDrawer"> 
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Upload statistics</a></li>
            <li><a href="/">Upload POIS</a></li>
            <li><a href="/">Edit users</a></li>
            <li><a href="/">Exit</a></li>
        </ul>
    </nav>
    )
};

export default sideDrawer;