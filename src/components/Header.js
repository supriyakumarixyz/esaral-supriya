import React from 'react';
import arrowLeft from '../arrow-left.svg';
import Search from '../search.svg';


const Header = () => {
  return (
    <>
  <div className="item1 body">
    <p className='headerText'>
      <img className='arrowLeft' src={arrowLeft}/>
      <span className='headerTitle'>Physics</span>
      <img className='search' src={Search}/>
    </p>
  </div>
    </>
  );
};

export default Header;
