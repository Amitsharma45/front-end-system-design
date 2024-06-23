import React from "react";
import "./App.css";
import AutoComplete from "./components/autoComplete";
export default function App() {
  const fetchData = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.recipes;
  };
  return (
    <div>
      <h1 className="heading">Auto Complete</h1>
      <AutoComplete placeholder="Search here..." fetchData={fetchData} />
    </div>
  );
}
