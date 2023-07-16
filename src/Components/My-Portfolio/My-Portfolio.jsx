import React from "react";
import "./My-Portfolio.css";
import Tarjetas from "../Tarjetas/Tarjetas";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <h1>MY PORTFOLIO</h1>
        <Tarjetas/>
    </div>
  );
}

export default Portfolio;