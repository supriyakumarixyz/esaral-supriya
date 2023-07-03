import React from "react";
import openBook from '../book-open.svg'
function Sidebar() {
  return (
    <>
      <div class="item2 sidebarmain">
        <div className="sidebar">
          <div className="logo"><img className="openBook" src={openBook}/><span className="index">Index</span></div>
          <div className="sideData">
          <ul className="menu">
            <li className="menu-item">Units & Dimension</li>
            <li className="menu-item">Laws of Motion</li>
            <li className="menu-item">Thermodynamics</li>
            <li className="menu-item">Kinematics</li>
            <li className="menu-item">Work, Energy and Power</li>
            <li className="menu-item">Electrostatics</li>
            <li className="menu-item">Rotational Dynamics</li>
            <li className="menu-item"> Gravitation</li>
            <li className="menu-item"> Fluid Dynamics</li>
            <li className="menu-item"> Units & Dimensions</li>
            <li className="menu-item"> Laws of Motion</li>
            <li className="menu-item"> Laws of Motion</li>
            <li className="menu-item"> Thermodynmaics</li>
            <li className="menu-item"> Kinematics</li>
            <li className="menu-item"> Work,Energy and Power</li>
            <li className="menu-item"> Electrostatics</li>
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
