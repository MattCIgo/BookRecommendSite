import "./navmenu.css"
import React from "react";
import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <nav className={'navMenu'}>
          <NavLink exact="true" activeclassname="active" to="/">
            <button type='button' className = {'homeButton'}>Home</button>
          </NavLink>

          <span id={'websiteName'}>
            <h1>WebSite Name</h1>
          </span>

          <span id={'pageButtons'}>
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