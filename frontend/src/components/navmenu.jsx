import "./navmenu.css"
import React from "react";
import {NavLink} from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <nav className={'navMenu'}>
        <h1 id = {'websiteName'}>BookRecommend</h1>
           
        <span>
          <NavLink>
            <button type='button' className = {'navMenuButtons'}>All Recommendations</button>
          </NavLink>
          <NavLink>
            <button type='button' className = {'navMenuButtons'}>Write Review</button>
          </NavLink>
          <NavLink>
            <button type='button' className = {'navMenuButtons'}>Your Favorites</button>
          </NavLink> 
          <NavLink>
            <button type='button' className = {'navMenuButtons'}>Login</button>
          </NavLink>
        </span>
      </nav>
    </>
  )
}

export default NavMenu