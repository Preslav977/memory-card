export function HeaderComponent({
  gameName,
  gameInstructions,
  gameScore,
  showScore,
  gameHighestScore,
  showHeighestScore,
}) {
  return (
    <div className="header-container">
      <div>
        <h1 className="game-name">{gameName}</h1>
        <p className="game-instructions">{gameInstructions}</p>
      </div>
      <div className="score-container">
        <p className="score">
          {gameScore} {showScore}
        </p>
        <p className="highest-score">
          {gameHighestScore} {showHeighestScore}
        </p>
      </div>
    </div>
  );
}
