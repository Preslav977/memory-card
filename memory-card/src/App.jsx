import { useState } from "react";

import { pokemonImages } from "./api/FetchPokemons";

import { HeaderComponent } from "./components/HeaderComponent";

import { MainComponent } from "./components/MainComponent";

import { shuffleArray } from "./helper/shuffleArray";

import "./App.css";

function App() {
  const [shuffleImg, setShuffleImg] = useState(pokemonImages);

  const [score, setScore] = useState(0);

  const [highestScore, setHighestScore] = useState(0);

  const [pokemonCard, setPokemonCard] = useState([]);

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
