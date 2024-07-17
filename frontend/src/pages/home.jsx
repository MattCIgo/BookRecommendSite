import "./home.css"
import React from "react";
import NavMenu from "../components/navmenu";
import {useState, useEffect} from "react";

const Home = () => {
  return (
    <>
      <NavMenu />

      <div id={'intro'}>
        <h1 id ={'title'}>Website</h1>
        <div id={'homeImageDiv'}>
          <img id={'homeImage'}>
          </img>
        </div>
        <p>
          If you are looking for a good book recommendation then /this website/ will
          help you find what you are looking for. We can recommend many genres of 
          books which you may be interested in. Choose from Action, Adventure, Comedy,
          Mystery, Fantasy, Romance, etc. Below you will find a random list of books 
          that may interest you along with a synopsis and score.
        </p>
      </div>

      <div id={'recommend'}>
        <h2>Recommended</h2>
        <div id={'bookName'}>
          <h3>BookName</h3>
            <p>
            book image goes here. generates a random book
            on page. words words words words words words words
            words. words words words. API to get book image (maybe)
            and synopsis. Another API to get a new recommendation?
            </p>
        </div>
        <div id={'bookSynopsis'}>
          <h3 id={'synopsis'}>Synopsis</h3>
            <p>synopsis and recommended should be side by side</p>
        </div>
      </div>
    </>
  )
}

export default Home