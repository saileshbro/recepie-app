import React from "react";
import "./recepie.styles.css";
function Recepie({ image, label, calories, ingredients }) {
  return (
    <div className="recipe">
      <img className="image " src={image} alt={label} />
      <h1>{label}</h1>
      <p>{calories}</p>
      <ul>
        {ingredients.map(({ text }) => {
          console.log(text);
          return <li>{text}</li>;
        })}
      </ul>
    </div>
  );
}

export default Recepie;
