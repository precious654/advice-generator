import React from "react";
import dice from "./images/icon-dice.svg"
import patternDivider from "./images/pattern-divider-desktop.svg";
import patterndivider from "./images/pattern-divider-mobile.svg";

function Card() {

  let count = 235;

  let advice = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="card">
      <p className="heading">Advice #{count}</p>
      <h3 className="advice">"{advice}"</h3>

      <div className="pattern-divider">
        <img src={patternDivider} alt="icon" className="desktop-image" />
        <img src={patterndivider} alt="icon" className="mobile-image" />
      </div>

      <div className="button">
        <img src={dice} alt="icon" className="icon" />
      </div>
    </div>
  )
}

export default Card;
