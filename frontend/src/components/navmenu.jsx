import "./navmenu.css"
import React from "react";
import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <nav className={'navMenu'}>
        <h1 id = {'websiteName'}>Website Name</h1>
           
        <span>
          <NavLink>
            <button type='button' className = {'navMenuButtons'}>Link1</button>
          </NavLink>
          <NavLink>
            <button type='button' className = {'navMenuButtons'}>Link2</button>
          </NavLink>
          <NavLink>
            <button type='button' className = {'navMenuButtons'}>Link3</button>
          </NavLink> 
          <NavLink>
            <button type='button' className = {'navMenuButtons'}>Link4</button>
          </NavLink>
        </span>
      </nav>
    </>
  )
}

export default NavMenu