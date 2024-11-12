import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/assets/Router.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./main.css";

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <>
          <Header />
          <Router />
          <Footer />
        </>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
