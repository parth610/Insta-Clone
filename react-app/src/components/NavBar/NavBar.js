import React from 'react';
import './NavBar.css'
import NavBarLeft from './NavBarLeft/NavBarLeft';
import NavBarMid from './NavBarMid/NavBarMid';
import NavBarRight from './NavBarRight/NavBarRight';
const NavBar = () => {
  return (
    <nav>
      <div className="navBar">
        <div className="navBar__leftPannel">
          <NavBarLeft />
        </div>

        <div className="navBar__middlePannel">
          <NavBarMid />
        </div>

        <div className="navBar__rightPannel">
          <NavBarRight />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
