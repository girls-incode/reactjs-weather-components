import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
  console.log('NavBar render');
  return (
    <nav className='navbar navbar-dark bg-primary'>
      <a className='navbar-brand'>
        Navv
        <span className='badge badge-dark'>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
