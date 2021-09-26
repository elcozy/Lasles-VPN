import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Plans />
    <Testimony />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
