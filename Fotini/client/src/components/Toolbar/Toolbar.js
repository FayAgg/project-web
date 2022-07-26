import React, {Component} from "react";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbarNavigation">  
        <div>
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbarLogo"> <a href="/" > WELCOME </a></div>
        <div className="spacer"></div>

        <div className="toolbarNavigationItems">
            <ul>
                <li> <a href="/"> ADMIN PAGE </a></li>
                <li> <a href="/"> STATISTICS </a></li>
                <li> <a href="/"> EXIT </a></li>

            </ul>

        </div>
        </nav>
    </header> 

);

export default toolbar;