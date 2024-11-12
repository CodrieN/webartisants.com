import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import "./main.css";

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <>
          <Header />
          <Services />
          <Portfolio />
          <Testimonials />
          <Footer />
        </>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
