import "./styles.css";
import { useEffect, useState } from "react";
import Recipe from "./Recipe";

export default function App() {
  const API_ID = "ff3fd414";
  const API_KEY = "c897359c853b84bfb069b8d81829a0a2";
  const [recipeList, setRecipeList] = useState([]);
  const [inputQuery, setInput] = useState("");
  const [searchQuery, setSearch] = useState("Fish");

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(
        `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=9&calories=591-722&health=alcohol-free`
      );
      const data = await response.json();
      setRecipeList(data.hits);
      console.log(data.hits);
    }

    getRecipes();
  }, [searchQuery]);

  function handleChange(e) {
    let q = e.target.value;
    setInput(q);
    // console.log(inputQuery);
  }

  function handleClick(e) {
    setSearch(inputQuery);
    setInput("");
    e.preventDefault();
  }

  return (
    <form>
      <div className="search-bar">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search..."
          value={inputQuery}
        ></input>
        <button onClick={handleClick} type="submit">
          Search
        </button>
      </div>

      <div className="card-container">
        {recipeList.map((recipe) => {
          return (
            <Recipe
              image={recipe.recipe.image}
              name={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </div>
    </form>
  );
}
