import { useState } from "react";

import { pokemonImages } from "./api/FetchPokemons";

import { HeaderComponent } from "./components/HeaderComponent";

import { MainComponent } from "./components/MainComponent";

import { shuffleArray } from "./helper/shuffleArray";

import "./styles/style.css";

function App() {
  const [shuffleImg, setShuffleImg] = useState(pokemonImages);

  const [score, setScore] = useState(0);

  const [highestScore, setHighestScore] = useState(0);

  const [pokemonCard, setPokemonCard] = useState([]);

  function saveHighestScore() {
    if (highestScore > score) {
      return highestScore;
    } else {
      setHighestScore(score);
    }
  }

  function handleClick(pokemon) {
    const shuffledArray = shuffleArray([...shuffleImg]);
    setShuffleImg(shuffledArray);
    if (!pokemonCard.includes(pokemon.id)) {
      setPokemonCard([...pokemonCard, pokemon.id]);
      setScore(score + 1);
    } else {
      setPokemonCard([]);
      setScore(0);
      const showHighestScore = saveHighestScore();
    }
  }

  return (
    <>
      <HeaderComponent
        gameName="Pokemon Memory Game"
        gameInstructions="Get points by clicking on the pokemon card, 
      but don't click it more than once"
        gameScore="Score: "
        showScore={score}
        gameHighestScore="Best score: "
        showHeighestScore={highestScore}
      ></HeaderComponent>
      <MainComponent>
        <div className="card-container">
          {shuffleImg.map((pokemon) => (
            <div
              className="card"
              key={pokemon.id}
              onClick={() => handleClick(pokemon)}
            >
              <div className="img-container">
                <img src={pokemon.img} alt={pokemon.name} />
              </div>
              <p className="pokemon-name">{pokemon.name}</p>
            </div>
          ))}
        </div>
      </MainComponent>
    </>
  );
}

export default App;
