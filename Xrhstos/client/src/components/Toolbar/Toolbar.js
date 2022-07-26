import React from "react";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbarNavigation">  
        <div>
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbarLogo"> <a href="/" > The Rona </a></div>
        <div className="spacer"></div>

        <div className="toolbarNavigationItems">
            <ul>
               
            </ul>

        </div>
        </nav>
    </header> 

);

export default toolbar;