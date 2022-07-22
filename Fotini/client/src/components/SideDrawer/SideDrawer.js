import React from "react";
import './SideDrawer.css';

const sideDrawer = props =>{
    
    
    return(
    <nav className="sideDrawer"> 
        <ul>
            <li><a href="/">UPLOAD</a></li>
            <li><a href="/">STATISTICS</a></li>
        </ul>
    </nav>
    )
};

export default sideDrawer;