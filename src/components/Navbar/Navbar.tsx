import React from 'react';
import nab from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={nab.nav}>

      <div className={nab.item}>
        <NavLink to='/profile' activeClassName={nab.activeLink}>Profile</NavLink>
      </div>
      <div className={nab.item}>
        <NavLink to='/dialogs' activeClassName={nab.activeLink}>Messages</NavLink>
      </div>
      <div className={nab.item}>
        <NavLink to='/news' activeClassName={nab.activeLink}>News</NavLink>
      </div>
      <div className={nab.item}>
        <NavLink to='/music' activeClassName={nab.activeLink}>Music</NavLink>
      </div>
      <div className={nab.item}>
        <NavLink to='/settings' activeClassName={nab.activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
};

export default Navbar;