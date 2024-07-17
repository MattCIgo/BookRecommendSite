import "./home.css"
import React from "react";
import NavMenu from "../components/navmenu";
import {useState, useEffect} from "react";

const Home = () => {
  return (
    <>
      <NavMenu />
      <div id={'intro'}>
        <div id={'homeImageDiv'}>
          <img id={'homeImage'}>
          </img>
        </div>
      </div>
    </>
  )
}

export default Home