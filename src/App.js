import React, { useEffect, useState } from "react";
import "./App.css";
import Recepie from "./recepie.component";

function App() {
  const [recepies, setRecepies] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    getRecepies(query);
  }, [query]);

  const getRecepies = async query => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const { hits } = await response.json();
    console.log(hits);
    setRecepies(hits);
  };

  return (
    <div className="App">
      <form
        className="search-form"
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
          setSearch("");
        }}
      >
        <input
          onChange={e => setSearch(e.target.value)}
          type="text"
          className="search-bar"
          value={search}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recepie-box">
        {recepies.map(({ recipe }) => (
          <Recepie key={recipe.url} {...recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
