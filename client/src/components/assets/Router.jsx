import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import NotFound from "../../pages/NotFound/NotFound";
import Team from "../../pages/Team/Team";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
