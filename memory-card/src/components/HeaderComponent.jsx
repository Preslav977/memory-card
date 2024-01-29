export function HeaderComponent({
  gameName,
  gameInstructions,
  gameScore,
  gameHighestScore,
}) {
  return (
    <div className="header-container">
      <div>
        <h1 className="gameName">{gameName}</h1>
        <p>{gameInstructions}</p>
      </div>
      <div className="scoreContainer">
        <p className="score">Score: {gameScore}</p>
        <p>Best Score: {gameHighestScore}</p>
      </div>
    </div>
  );
}
