import React from "react";
import photogrid from "../photogrid.png";
import "../style.css";
function Hero() {
  return (
    <hero>
      <img src={photogrid} alt="photogrid" className="photogrid" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--p" >
        Join unique interactive activities led by one-of-a-kind hosts-all
        leaving home.
      </p>
    </hero>
  );
}

export default Hero;
