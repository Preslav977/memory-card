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
        <h1 className="gameName">{gameName}</h1>
        <p>{gameInstructions}</p>
      </div>
      <div className="scoreContainer">
        <p className="score">
          {gameScore} {showScore}
        </p>
        <p>
          {gameHighestScore} {showHeighestScore}
        </p>
      </div>
    </div>
  );
}
