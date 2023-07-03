import React, { useContext, useEffect, useState } from "react";
import openBook from '../book-open.svg'
function Sidebar(props) {
  return (
    <>
      <div className="item2 sidebarmain">
        <div className="sidebar">
       <div className="logo"><img className="openBook" src={openBook}/><span className="index">Index</span></div>
       <div className="sideData">
          <ul className="menu">
         {
          props.apiData.map((value,index)=>(
              <li key={index} className="menu-item">{value.display_name}</li>
          ))
         }
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
