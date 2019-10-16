import React from 'react';
import './Logo.css';
import logo from './Imgs/logo.png';

function Logo() {
  return (
    <>
    <img className="logo" src={logo} alt='IntraVision case' />
    </>
  );
}

export default Logo;
