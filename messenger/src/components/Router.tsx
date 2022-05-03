import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import { Auth, EditProfile, Home, Profile } from "../routes/EditProfile";
import { Auth, EditProfile, Home, Profile } from "../routes/Home";
import { Auth, EditProfile, Home, Profile } from "../routes/Profile";

const Router = () => {
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/page1/*" element={<EditProfile />} />
      <Route path="/page2/*" element={<Home />} />
      <Route path="/*" element={<Profile />} />
    </Routes>
  </BrowserRouter>
}

export default Router;