import React from "react";
import dice from "./images/icon-dice.svg"
import patternDivider from "./images/pattern-divider-desktop.svg";
import patterndivider from "./images/pattern-divider-mobile.svg";

function Card() {

  let[adviceCount, setAdviceCount] = React.useState(1);

  let[advice, setAdvice] = React.useState("")

  React.useEffect( () => {
    fetch('https://api.adviceslip.com/advice')
    .then( (response) => response.json() )
    .then( (data) => setAdvice(data.slip.advice) )
  }, [adviceCount] );

  function handleCount() {
    setAdviceCount( (prevState) => prevState + 1)
  }

  return (
    <div className="card">
      <p className="heading">Advice #<span>{adviceCount}</span></p>
      <h3 className="advice">"{advice}"</h3>

      <div className="pattern-divider">
        <img src={patternDivider} alt="icon" className="desktop-image" />
        <img src={patterndivider} alt="icon" className="mobile-image" />
      </div>

      <div className="button" onClick={handleCount}>
        <img src={dice} alt="icon" className="icon" />
      </div>
    </div>
  )
}

export default Card;
