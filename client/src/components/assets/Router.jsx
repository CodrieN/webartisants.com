// Router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../../pages/Contact/Contact";
import NotFound from "../../pages/NotFound/NotFound";
// import other pages as necessary

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={<Contact />} />
    </Routes>
  );
};

export default Router;
