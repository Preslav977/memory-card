import { useState } from "react";

import { pokemonImages } from "./api/FetchPokemons";

import { HeaderComponent } from "./components/HeaderComponent";

import "./App.css";

function App() {
  return (
    <HeaderComponent
      gameName="Pokemon Memory Game"
      gameInstructions="Get points by clicking on the pokemon card, 
      but don't click it more than once"
    ></HeaderComponent>
  );
}

export default App;
