import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

const Router = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
    <Routes>
      {isLoggedIn ?
      <>
      <Route path="/" element={<Home />}></Route>
      </> : <Route path="/" element={<Auth />} />}
    </Routes>
  </BrowserRouter>
  )
}

export default Router;