import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"></span>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{ background: 'tomato' }}>Home</NavLink></li>
      <li><NavLink to="/about" >About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses" activeClassName={"myCustomActivation"}>Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;