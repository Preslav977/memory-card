import { useState } from "react";

import { pokemonImages } from "./api/FetchPokemons";

import { HeaderComponent } from "./components/HeaderComponent";

import { MainComponent } from "./components/MainComponent";

import "./App.css";

function App() {
  return (
    <>
      <HeaderComponent
        gameName="Pokemon Memory Game"
        gameInstructions="Get points by clicking on the pokemon card, 
      but don't click it more than once"
      ></HeaderComponent>
      <MainComponent>
        <div className="cardContainer">
          {pokemonImages.map((pokemon) => (
            <div className="card" key={pokemon.id}>
              <div className="imgContainer">
                <img src={pokemon.img} alt={pokemon.name} />
              </div>
              <p className="pokemonName">{pokemon.name}</p>
            </div>
          ))}
        </div>
      </MainComponent>
    </>
  );
}

export default App;
