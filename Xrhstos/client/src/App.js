
import Toolbar from './components/Toolbar/Toolbar';
import { Component } from 'react';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () =>{
    this.setState( (prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false});
  };

  render() {
    
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer/>
      backdrop =<Backdrop click = {this.backdropClickHandler} />
    }

  return (

  
    <div style= { { height: '100%'}}>
      <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
  
      <main style={{ marginTop: '64px'}}>
      <p> This is the page content </p>
        
      </main>
 
    </div>
  );
}
}


export default App;
