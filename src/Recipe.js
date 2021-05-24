import React from "react";
// import RecipeList from "./RecipeUL";

function Recipe(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <ul>
        {props.ingredients.map((item) => {
          return <li>{item.text}</li>;
        })}
      </ul>

      <img src={props.image} alt="recipe"></img>
    </div>
  );
}

export default Recipe;
