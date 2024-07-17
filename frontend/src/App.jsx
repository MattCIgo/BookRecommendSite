import { useState } from 'react'
import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}></Route>
  )
)

function App({routes}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
